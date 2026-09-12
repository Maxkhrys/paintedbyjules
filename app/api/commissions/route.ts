import { NextResponse } from "next/server";
import { deliverSubmission } from "@/lib/submissions";

const allowedSubjects = new Set([
  "Individual",
  "Couple",
  "Family",
  "Pet",
  "Wedding",
  "Memorial",
  "Other",
]);
const allowedSizes = new Set(["A5", "A4", "A3", "Custom", "Not sure"]);

function isShortString(value: unknown, max = 500) {
  return typeof value === "string" && value.trim().length > 0 && value.length <= max;
}

function isEmail(value: unknown) {
  return (
    typeof value === "string" &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  );
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;

    if (
      !isShortString(payload.name, 120) ||
      !isEmail(payload.email) ||
      !allowedSubjects.has(String(payload.subject)) ||
      !allowedSizes.has(String(payload.size))
    ) {
      return NextResponse.json(
        { ok: false, message: "Please check the required details and try again." },
        { status: 400 },
      );
    }

    const safePayload = {
      name: String(payload.name).trim(),
      email: String(payload.email).trim(),
      phone: typeof payload.phone === "string" ? payload.phone.slice(0, 40).trim() : "",
      subject: String(payload.subject),
      subjectCount: String(payload.subjectCount ?? "1").slice(0, 3),
      size: String(payload.size),
      styleNotes: typeof payload.styleNotes === "string" ? payload.styleNotes.slice(0, 2000) : "",
      backgroundPreference:
        typeof payload.backgroundPreference === "string"
          ? payload.backgroundPreference.slice(0, 500)
          : "",
      specialDetails:
        typeof payload.specialDetails === "string" ? payload.specialDetails.slice(0, 1500) : "",
      isGift: payload.isGift === "yes" ? "yes" : "no",
      requiredBy: typeof payload.requiredBy === "string" ? payload.requiredBy.slice(0, 10) : "",
      additionalNotes:
        typeof payload.additionalNotes === "string" ? payload.additionalNotes.slice(0, 2000) : "",
      referenceFiles: Array.isArray(payload.referenceFiles)
        ? payload.referenceFiles.slice(0, 6).map((file) => ({
            name:
              typeof file === "object" && file && "name" in file
                ? String(file.name).slice(0, 180)
                : "reference image",
            type:
              typeof file === "object" && file && "type" in file
                ? String(file.type).slice(0, 100)
                : "",
            size:
              typeof file === "object" && file && "size" in file
                ? Number(file.size) || 0
                : 0,
          }))
        : [],
      submittedAt: new Date().toISOString(),
    };

    const result = await deliverSubmission("commission", safePayload);
    return NextResponse.json(result, { status: result.delivery === "sent" ? 201 : 202 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "The request could not be submitted. Please try again." },
      { status: 500 },
    );
  }
}
