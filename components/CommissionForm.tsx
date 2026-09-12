/* eslint-disable @next/next/no-img-element -- browser-local object URLs cannot use image optimization */
"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "@/components/ArrowUpRight";
import { commissionSizes, commissionSubjects } from "@/config/commissions";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  subjectCount: string;
  size: string;
  styleNotes: string;
  backgroundPreference: string;
  specialDetails: string;
  isGift: "yes" | "no";
  requiredBy: string;
  additionalNotes: string;
};

type SubmitStatus =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; delivery: "sent" | "preview" }
  | { state: "error"; message: string };

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  subjectCount: "1",
  size: "",
  styleNotes: "",
  backgroundPreference: "",
  specialDetails: "",
  isGift: "no",
  requiredBy: "",
  additionalNotes: "",
};

const maxFiles = 6;
const maxFileSize = 8 * 1024 * 1024;

type UploadPreview = {
  file: File;
  url: string;
};

export function CommissionForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>(initialForm);
  const [uploads, setUploads] = useState<UploadPreview[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>({ state: "idle" });
  const objectUrls = useRef(new Set<string>());

  useEffect(() => {
    const urls = objectUrls.current;
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, []);

  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) return current;
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function validateStep(currentStep: number) {
    const nextErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!form.name.trim()) nextErrors.name = "Enter your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        nextErrors.email = "Enter a valid email address.";
      }
      if (!form.subject) nextErrors.subject = "Choose what you would like painted.";
    }

    if (currentStep === 2 && !form.size) {
      nextErrors.size = "Choose a preferred size, or select not sure.";
    }

    if (currentStep === 3 && uploads.length === 0) {
      nextErrors.files = "Add at least one reference photograph.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function goForward() {
    if (!validateStep(step)) return;
    setStep((current) => Math.min(3, current + 1));
    document.getElementById("commission-form-title")?.focus();
  }

  function handleFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.target.files ?? []);
    const imageFiles = selected.filter(
      (file) => file.type.startsWith("image/") && file.size <= maxFileSize,
    );
    setUploads((current) => {
      const availableSlots = Math.max(0, maxFiles - current.length);
      const additions = imageFiles.slice(0, availableSlots).map((file) => {
        const url = URL.createObjectURL(file);
        objectUrls.current.add(url);
        return { file, url };
      });
      return [...current, ...additions];
    });
    setErrors((current) => {
      const next = { ...current };
      if (selected.some((file) => !file.type.startsWith("image/") || file.size > maxFileSize)) {
        next.files = "Use JPG, PNG, HEIC or WebP images up to 8 MB each.";
      } else {
        delete next.files;
      }
      return next;
    });
    event.target.value = "";
  }

  function removeFile(index: number) {
    setUploads((current) => {
      const removed = current[index];
      if (removed) {
        URL.revokeObjectURL(removed.url);
        objectUrls.current.delete(removed.url);
      }
      return current.filter((_, fileIndex) => fileIndex !== index);
    });
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step < 3) {
      goForward();
      return;
    }
    if (!validateStep(3)) return;

    setStatus({ state: "submitting" });
    try {
      const response = await fetch("/api/commissions", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...form,
          referenceFiles: uploads.map(({ file: { name, type, size } }) => ({ name, type, size })),
        }),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        delivery?: "sent" | "preview";
        message?: string;
      };
      if (!response.ok || !result.ok || !result.delivery) {
        throw new Error(result.message || "The request could not be submitted.");
      }
      setStatus({ state: "success", delivery: result.delivery });
    } catch (error) {
      setStatus({
        state: "error",
        message: error instanceof Error ? error.message : "The request could not be submitted.",
      });
    }
  }

  function reset() {
    setForm(initialForm);
    objectUrls.current.forEach((url) => URL.revokeObjectURL(url));
    objectUrls.current.clear();
    setUploads([]);
    setErrors({});
    setStatus({ state: "idle" });
    setStep(1);
  }

  if (status.state === "success") {
    return (
      <div className="form-success" role="status">
        <p className="form-success__mark" aria-hidden="true">✓</p>
        <h3>{status.delivery === "sent" ? "Your request is with Jules." : "Preview request complete."}</h3>
        <p>
          {status.delivery === "sent"
            ? "Thank you. Jules will review your idea and reply using the email you supplied."
            : "This site preview does not deliver enquiries yet. Your reference photographs stayed in this browser."}
        </p>
        <button type="button" onClick={reset}>Start another request</button>
      </div>
    );
  }

  return (
    <form className="commission-form" onSubmit={submit} noValidate>
      <div className="form-progress" aria-label={`Step ${step} of 3`}>
        {["Your idea", "The piece", "References"].map((label, index) => (
          <div key={label} data-active={step === index + 1} data-complete={step > index + 1}>
            <span>0{index + 1}</span>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <h2 id="commission-form-title" tabIndex={-1}>
        {step === 1 && "First, tell Jules who it is for."}
        {step === 2 && "Shape the piece."}
        {step === 3 && "Add the photographs."}
      </h2>

      {step === 1 ? (
        <div className="form-step">
          <div className="field-row field-row--two">
            <label>
              <span>Name *</span>
              <input
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setField("name", event.target.value)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name ? <small id="name-error">{errors.name}</small> : null}
            </label>
            <label>
              <span>Email *</span>
              <input
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => setField("email", event.target.value)}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? <small id="email-error">{errors.email}</small> : null}
            </label>
          </div>
          <label>
            <span>Phone <em>optional</em></span>
            <input
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={(event) => setField("phone", event.target.value)}
            />
          </label>
          <fieldset>
            <legend>What would you like painted? *</legend>
            <div className="choice-grid choice-grid--subjects">
              {commissionSubjects.map((subject) => (
                <label key={subject}>
                  <input
                    type="radio"
                    name="subject"
                    value={subject}
                    checked={form.subject === subject}
                    onChange={() => setField("subject", subject)}
                  />
                  <span>{subject}</span>
                </label>
              ))}
            </div>
            {errors.subject ? <small>{errors.subject}</small> : null}
          </fieldset>
          <label className="field-count">
            <span>Number of people or pets</span>
            <input
              type="number"
              min="1"
              max="20"
              inputMode="numeric"
              value={form.subjectCount}
              onChange={(event) => setField("subjectCount", event.target.value)}
            />
          </label>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="form-step">
          <fieldset>
            <legend>Preferred size *</legend>
            <div className="choice-grid choice-grid--sizes">
              {commissionSizes.map((size) => (
                <label key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={form.size === size}
                    onChange={() => setField("size", size)}
                  />
                  <span>{size}</span>
                </label>
              ))}
            </div>
            {errors.size ? <small>{errors.size}</small> : null}
          </fieldset>
          <label>
            <span>Preferred style or mood</span>
            <textarea
              rows={4}
              placeholder="Loose or detailed, colour or neutral, a feeling you want the piece to hold..."
              value={form.styleNotes}
              onChange={(event) => setField("styleNotes", event.target.value)}
            />
          </label>
          <label>
            <span>Background preference</span>
            <input
              type="text"
              placeholder="Keep the original, simplify it, not sure..."
              value={form.backgroundPreference}
              onChange={(event) => setField("backgroundPreference", event.target.value)}
            />
          </label>
          <label>
            <span>Special details to keep</span>
            <textarea
              rows={3}
              value={form.specialDetails}
              onChange={(event) => setField("specialDetails", event.target.value)}
            />
          </label>
          <div className="field-row field-row--gift">
            <fieldset>
              <legend>Is this a gift?</legend>
              <div className="inline-choices">
                {(["yes", "no"] as const).map((value) => (
                  <label key={value}>
                    <input
                      type="radio"
                      name="isGift"
                      value={value}
                      checked={form.isGift === value}
                      onChange={() => setField("isGift", value)}
                    />
                    <span>{value === "yes" ? "Yes" : "No"}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label>
              <span>Required by date <em>if applicable</em></span>
              <input
                type="date"
                value={form.requiredBy}
                onChange={(event) => setField("requiredBy", event.target.value)}
              />
            </label>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="form-step">
          <div className="upload-field">
            <div>
              <p>Reference photographs *</p>
              <span>Up to six images. JPG, PNG, HEIC or WebP, 8 MB each.</span>
            </div>
            <label>
              <input type="file" accept="image/*" multiple onChange={handleFiles} />
              Choose photographs
            </label>
          </div>
          {errors.files ? <small className="upload-error">{errors.files}</small> : null}
          {uploads.length ? (
            <ul className="upload-previews" aria-label="Selected reference photographs">
              {uploads.map((preview, index) => (
                <li key={`${preview.file.name}-${preview.file.lastModified}`}>
                  <img src={preview.url} alt="" />
                  <button type="button" onClick={() => removeFile(index)} aria-label={`Remove ${preview.file.name}`}>
                    ×
                  </button>
                  <span>{preview.file.name}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <label>
            <span>Anything else Jules should know?</span>
            <textarea
              rows={6}
              placeholder="Which photograph matters most, the occasion, delivery questions, or anything difficult to show in the images..."
              value={form.additionalNotes}
              onChange={(event) => setField("additionalNotes", event.target.value)}
            />
          </label>
          <p className="form-disclosure">
            On this site preview, reference images remain in your browser and are not uploaded.
          </p>
        </div>
      ) : null}

      {status.state === "error" ? <p className="form-error" role="alert">{status.message}</p> : null}

      <div className="form-actions">
        {step > 1 ? (
          <button type="button" className="form-back" onClick={() => setStep((current) => current - 1)}>
            ← Back
          </button>
        ) : <span />}
        {step < 3 ? (
          <button type="button" className="form-next" onClick={goForward}>
            Continue
            <ArrowUpRight />
          </button>
        ) : (
          <button type="submit" className="form-next" disabled={status.state === "submitting"}>
            {status.state === "submitting" ? "Sending..." : "Submit commission request"}
            <ArrowUpRight />
          </button>
        )}
      </div>
    </form>
  );
}
