import Link from "next/link";
import { ArrowUpRight, Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

/** Questions as a quiet accordion: only the question shows until you open it (the answers stay in the HTML). */
export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {items.map((f) => (
        <details key={f.question} className="group py-5 sm:py-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[clamp(18px,2.2vw,26px)] font-light tracking-[-0.02em] text-[var(--fg)] [&::-webkit-details-marker]:hidden">
            {f.question}
            <Plus size={22} className="shrink-0 text-[var(--fg3)] transition-transform duration-300 group-open:rotate-45 group-open:text-[var(--accent-bright)]" />
          </summary>
          <p className="body mt-4 max-w-[60ch]">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

/** Big mono numbers on one line, hairline-separated. Works for one to four stats. */
export function StatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <Reveal>
      <dl
        className={`grid gap-y-10 divide-white/10 sm:divide-x ${
          stats.length === 1 ? "" : stats.length === 2 ? "sm:grid-cols-2" : stats.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
        }`}
      >
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col-reverse gap-3 sm:px-8 sm:first:pl-0 sm:last:pr-0">
            <dt className="small max-w-[24ch]">{s.label}</dt>
            <dd className={`stat-value whitespace-nowrap ${stats.length >= 3 ? "text-[clamp(34px,5vw,72px)]" : "text-[clamp(44px,7vw,84px)]"}`}>{s.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}

interface Row {
  href: string;
  title: string;
  /** Right-aligned note on desktop. */
  note?: string;
  /** Small mono label above the title. */
  meta?: string;
}

/** An interactive list: big light titles on hairlines, slide + glow on hover. For indexes. */
export function LinkRows({ rows }: { rows: Row[] }) {
  return (
    <ul className="border-t border-white/10">
      {rows.map((r) => (
        <li key={r.href}>
          <Link
            href={r.href}
            className="group flex flex-col gap-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:py-9"
          >
            <span className="flex flex-col gap-2">
              {r.meta && <span className="mono text-[12px] text-[var(--link)]">{r.meta}</span>}
              <span className="text-[clamp(24px,3.8vw,46px)] font-light leading-[1.1] tracking-[-0.03em] text-[var(--fg)] transition-all duration-300 group-hover:translate-x-2 group-hover:text-[var(--accent-bright)]">
                {r.title}
              </span>
            </span>
            <span className="flex items-center gap-6 sm:justify-end">
              {r.note && <span className="small sm:max-w-[30ch] sm:text-right">{r.note}</span>}
              <ArrowUpRight size={24} className="hidden shrink-0 text-[var(--fg3)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--accent-bright)] sm:block" />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** One big link to the next page in a set, so every page leads somewhere. */
export function NextUp({ href, label, title }: { href: string; label: string; title: string }) {
  return (
    <Link href={href} className="group flex flex-col gap-3">
      <span className="mono text-[12px] text-[var(--fg3)]">{label}</span>
      <span className="flex items-center justify-between gap-6 text-[clamp(26px,4.4vw,56px)] font-light leading-[1.08] tracking-[-0.03em] text-[var(--fg)] transition-colors group-hover:text-[var(--accent-bright)]">
        {title}
        <ArrowUpRight className="h-[0.7em] w-[0.7em] shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
