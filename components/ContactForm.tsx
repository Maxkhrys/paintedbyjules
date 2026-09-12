"use client";

import { useState } from "react";
import { ArrowUpRight } from "@/components/ArrowUpRight";

type ContactFormProps = {
  initialSubject?: string;
};

export function ContactForm({ initialSubject = "" }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", email: "", subject: initialSubject, message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "preview" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }));
    if (status === "error") setStatus("idle");
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        delivery?: "sent" | "preview";
        message?: string;
      };
      if (!response.ok || !result.ok || !result.delivery) {
        throw new Error(result.message || "The enquiry could not be submitted.");
      }
      setStatus(result.delivery);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "The enquiry could not be submitted.");
    }
  }

  if (status === "sent" || status === "preview") {
    return (
      <div className="contact-form__success" role="status">
        <p>{status === "sent" ? "Enquiry sent." : "Preview enquiry complete."}</p>
        <span>
          {status === "sent"
            ? "Thank you. Jules will reply using the email you supplied."
            : "This site preview does not deliver enquiries yet. No message was sent."}
        </span>
        <button type="button" onClick={() => setStatus("idle")}>Write another</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row field-row--two">
        <label>
          <span>Name *</span>
          <input
            required
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
          />
        </label>
        <label>
          <span>Email *</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
          />
        </label>
      </div>
      <label>
        <span>Subject *</span>
        <input
          required
          type="text"
          value={form.subject}
          onChange={(event) => update("subject", event.target.value)}
        />
      </label>
      <label>
        <span>Message *</span>
        <textarea
          required
          rows={7}
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
        />
      </label>
      {status === "error" ? <p role="alert">{message}</p> : null}
      <button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send enquiry"}
        <ArrowUpRight />
      </button>
    </form>
  );
}
