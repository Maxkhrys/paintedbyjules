import { NextResponse } from "next/server";
import { deliverSubmission } from "@/lib/submissions";

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
    const name = typeof payload.name === "string" ? payload.name.trim() : "";
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const message = typeof payload.message === "string" ? payload.message.trim() : "";

    if (!name || name.length > 120 || !isEmail(payload.email) || !subject || !message) {
      return NextResponse.json(
        { ok: false, message: "Please complete each required field." },
        { status: 400 },
      );
    }

    const result = await deliverSubmission("contact", {
      name,
      email: String(payload.email).trim(),
      subject: subject.slice(0, 180),
      message: message.slice(0, 3000),
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json(result, { status: result.delivery === "sent" ? 201 : 202 });
  } catch {
    return NextResponse.json(
      { ok: false, message: "The enquiry could not be submitted. Please try again." },
      { status: 500 },
    );
  }
}
