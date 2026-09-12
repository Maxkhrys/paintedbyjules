export type DeliveryResult = {
  ok: true;
  delivery: "sent" | "preview";
};

type SubmissionKind = "commission" | "contact";

export async function deliverSubmission(
  kind: SubmissionKind,
  payload: Record<string, unknown>,
): Promise<DeliveryResult> {
  const endpoint =
    kind === "commission"
      ? process.env.COMMISSION_WEBHOOK_URL
      : process.env.CONTACT_WEBHOOK_URL;

  if (!endpoint) {
    return { ok: true, delivery: "preview" };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ kind, ...payload }),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Submission delivery failed with status ${response.status}`);
  }

  return { ok: true, delivery: "sent" };
}
