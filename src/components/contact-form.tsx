"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const revenueOptions = [
  "Pre-launch",
  "Under ₹5L",
  "₹5L–₹25L",
  "₹25L–₹1Cr",
  "₹1Cr+",
];

const contactSchema = z.object({
  name: z.string().min(2, "That doesn't look right — mind checking this field?"),
  email: z.string().email("That doesn't look right — mind checking this field?"),
  phone: z.string().min(10, "That doesn't look right — mind checking this field?"),
  revenue: z.string().min(1, "That doesn't look right — mind checking this field?"),
  message: z.string().min(10, "That doesn't look right — mind checking this field?"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit(values: ContactFormValues) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center" role="status">
        <CheckCircle2 size={40} strokeWidth={1.5} style={{ color: "var(--link)" }} />
        <h3 className="h3">Got it — thanks!</h3>
        <p className="small">We respond within 24 hours (Mon–Sat, 10am–7pm IST).</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
      style={{ ["--bg-field" as string]: "#ffffff" }}
    >
      <div>
        <label htmlFor="cf-name" className="field-label">Name</label>
        <input id="cf-name" autoComplete="name" aria-invalid={!!errors.name} {...register("name")} className="field" />
        {errors.name && <p className="field-error">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-email" className="field-label">Email</label>
        <input id="cf-email" type="email" autoComplete="email" aria-invalid={!!errors.email} {...register("email")} className="field" />
        {errors.email && <p className="field-error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-phone" className="field-label">Phone</label>
        <input id="cf-phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} {...register("phone")} className="field" />
        {errors.phone && <p className="field-error">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-revenue" className="field-label">Monthly revenue</label>
        <select id="cf-revenue" aria-invalid={!!errors.revenue} {...register("revenue")} className="field" defaultValue="">
          <option value="" disabled>Select a range</option>
          {revenueOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.revenue && <p className="field-error">{errors.revenue.message}</p>}
      </div>

      <div>
        <label htmlFor="cf-message" className="field-label">Message</label>
        <textarea
          id="cf-message"
          rows={4}
          placeholder="What's the biggest thing slowing you down right now?"
          aria-invalid={!!errors.message}
          {...register("message")}
          className="field resize-none"
        />
        {errors.message && <p className="field-error">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary mt-1 w-full">
        {status === "submitting" ? "Sending…" : "Send & Get Your Free Audit"}
      </button>

      {status === "error" && (
        <p className="field-error text-center" role="alert">
          Something went wrong — try again, or email us directly.
        </p>
      )}

      <p className="caption text-center">We respond within 24 hours (Mon–Sat, 10am–7pm IST)</p>
    </form>
  );
}
