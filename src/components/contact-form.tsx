"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
      <div
        className="flex flex-col items-center text-center gap-3 p-10 rounded-card"
        style={{ background: "#111827", border: "1px solid rgba(0,212,170,0.3)" }}
      >
        <CheckCircle2 size={36} style={{ color: "#00D4AA" }} />
        <h3 className="font-display font-600 text-[18px]" style={{ color: "#F0F4FF" }}>
          Got it — thanks!
        </h3>
        <p className="text-[14px]" style={{ color: "#8B9CC8" }}>
          We respond within 4 hours (Mon–Sat, 10am–7pm IST).
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div>
        <label className="text-[13px] font-500 mb-1.5 block" style={{ color: "#8B9CC8" }}>Name</label>
        <input
          {...register("name")}
          className="w-full px-4 py-3 rounded-btn text-[14px] outline-none"
          style={{
            background: "#0A0E1A",
            border: `1px solid ${errors.name ? "#FF6B2B" : "#1E2D4A"}`,
            color: "#F0F4FF",
          }}
        />
        {errors.name && <p className="text-[12px] mt-1" style={{ color: "#FF6B2B" }}>{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-[13px] font-500 mb-1.5 block" style={{ color: "#8B9CC8" }}>Email</label>
        <input
          {...register("email")}
          type="email"
          className="w-full px-4 py-3 rounded-btn text-[14px] outline-none"
          style={{
            background: "#0A0E1A",
            border: `1px solid ${errors.email ? "#FF6B2B" : "#1E2D4A"}`,
            color: "#F0F4FF",
          }}
        />
        {errors.email && <p className="text-[12px] mt-1" style={{ color: "#FF6B2B" }}>{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-[13px] font-500 mb-1.5 block" style={{ color: "#8B9CC8" }}>Phone</label>
        <input
          {...register("phone")}
          type="tel"
          className="w-full px-4 py-3 rounded-btn text-[14px] outline-none"
          style={{
            background: "#0A0E1A",
            border: `1px solid ${errors.phone ? "#FF6B2B" : "#1E2D4A"}`,
            color: "#F0F4FF",
          }}
        />
        {errors.phone && <p className="text-[12px] mt-1" style={{ color: "#FF6B2B" }}>{errors.phone.message}</p>}
      </div>

      <div>
        <label className="text-[13px] font-500 mb-1.5 block" style={{ color: "#8B9CC8" }}>Monthly Revenue</label>
        <select
          {...register("revenue")}
          className="w-full px-4 py-3 rounded-btn text-[14px] outline-none"
          style={{
            background: "#0A0E1A",
            border: `1px solid ${errors.revenue ? "#FF6B2B" : "#1E2D4A"}`,
            color: "#F0F4FF",
          }}
          defaultValue=""
        >
          <option value="" disabled>Select a range</option>
          {revenueOptions.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        {errors.revenue && <p className="text-[12px] mt-1" style={{ color: "#FF6B2B" }}>{errors.revenue.message}</p>}
      </div>

      <div>
        <label className="text-[13px] font-500 mb-1.5 block" style={{ color: "#8B9CC8" }}>Message</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="What's the biggest thing slowing you down right now?"
          className="w-full px-4 py-3 rounded-btn text-[14px] outline-none resize-none"
          style={{
            background: "#0A0E1A",
            border: `1px solid ${errors.message ? "#FF6B2B" : "#1E2D4A"}`,
            color: "#F0F4FF",
          }}
        />
        {errors.message && <p className="text-[12px] mt-1" style={{ color: "#FF6B2B" }}>{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary justify-center mt-2">
        {status === "submitting" ? "Sending…" : "Send & Get Your Free Audit"} <ArrowRight size={18} />
      </button>

      {status === "error" && (
        <p className="text-[13px] text-center" style={{ color: "#FF6B2B" }}>
          Something went wrong — try again, or email us directly.
        </p>
      )}

      <p className="text-[12px] text-center" style={{ color: "#4A5A7A" }}>
        We respond within 4 hours (Mon–Sat, 10am–7pm IST)
      </p>
    </form>
  );
}
