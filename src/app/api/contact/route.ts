import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  revenue: z.string().min(1),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    // No sheet wired up yet — log so submissions are at least visible in server logs.
    console.log("New contact form submission (GOOGLE_SHEETS_WEBHOOK_URL not set):", parsed.data);
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...parsed.data,
      }),
    });

    if (!res.ok) {
      throw new Error(`Sheet webhook responded ${res.status}`);
    }
  } catch (err) {
    console.error("Failed to write contact submission to Google Sheet:", err);
    return NextResponse.json({ error: "Could not save submission" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
