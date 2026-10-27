import type { LucideIcon } from "lucide-react";

/**
 * The inner-page hero picture: rings around a glowing icon, a dashed ring turning slowly and one spark
 * riding the middle ring. Pure CSS (server-renderable); stops under reduced motion.
 */
export function OrbitMark({ Icon }: { Icon: LucideIcon }) {
  return (
    <div className="relative aspect-square w-[clamp(168px,24vw,300px)]" aria-hidden="true">
      <span className="absolute inset-0 rounded-full border border-white/10" />
      <span className="absolute inset-[9%] animate-[spin_46s_linear_infinite] rounded-full border border-dashed border-white/25 motion-reduce:animate-none" />
      <span className="absolute inset-[9%] animate-[spin_14s_linear_infinite] motion-reduce:animate-none">
        <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-bright)] shadow-[0_0_14px_3px_rgba(255,138,85,0.7)]" />
      </span>
      <span className="absolute inset-[26%] rounded-full border border-white/10" />
      <span
        className="absolute inset-[22%] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(255,107,43,0.3), transparent)" }}
      />
      <span className="glass absolute inset-[35%] flex items-center justify-center rounded-full">
        <Icon className="h-[46%] w-[46%] text-[var(--accent-bright)]" strokeWidth={1.4} />
      </span>
    </div>
  );
}
