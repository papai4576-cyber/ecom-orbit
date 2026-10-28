import { Reveal } from "@/components/motion/reveal";

const label = "mono text-[12px] uppercase tracking-[0.08em] text-[var(--link)]";

// Figures are hidden on purpose: this shows the layout of the report, not data.
const Hidden = ({ w = "•••••" }: { w?: string }) => <span className="mono text-[var(--fg3)]">₹ {w}</span>;

const CHANNELS = ["Website", "Marketplaces", "Quick commerce"];

const CADENCE = [
  { when: "Weekly", what: "ROAS, CAC and MER for every channel we run ads on." },
  { when: "Monthly", what: "One report: revenue, contribution margin, returns and RTO, rankings." },
  { when: "Scale plan", what: "A weekly strategy call on top." },
];

/**
 * End-to-End page: how the report works. Left, what you get and when; right, the report itself as a layout
 * with the figures hidden (no sample numbers). The headline number is contribution margin, the owner's P&L.
 */
export function ReportingSample() {
  return (
    <section id="reporting" className="section tone-light scroll-mt-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <span className={label}>How we report</span>
            <h2 className="h2 mt-4 max-w-[14ch]">One report. One number on top.</h2>
            <p className="lead mt-6 max-w-[46ch]">
              That number is your contribution margin: what&apos;s left of every sale after product cost, ads, marketplace fees, shipping and returns. It&apos;s what pays your team, so it&apos;s where we start.
            </p>

            <dl className="mt-10 border-t border-white/10">
              {CADENCE.map((c) => (
                <div key={c.when} className="grid grid-cols-[6.5rem_1fr] gap-x-4 border-b border-white/10 py-4 sm:grid-cols-[8rem_1fr]">
                  <dt className="mono text-[13px] uppercase tracking-[0.06em] text-[var(--link)]">{c.when}</dt>
                  <dd className="text-[16px] text-[var(--fg2)]">{c.what}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="card !p-0" role="img" aria-label="Layout of the monthly report: contribution margin first, then each channel, then next month's three moves. Figures hidden.">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-7">
                <span className="text-[15px] text-[var(--fg)]">Monthly report</span>
                <span className="caption">Your brand · one month</span>
              </div>

              <div className="px-5 py-6 sm:px-7 sm:py-8">
                <p className="caption">Contribution margin</p>
                <p className="mono mt-1 text-[clamp(34px,5vw,52px)] font-medium leading-none text-[var(--link)]">₹ ••••••</p>
                <p className="caption mt-3 max-w-[42ch]">Sales, less product cost, ads, fees, shipping and returns.</p>
              </div>

              <div className="border-t border-white/10 px-5 py-5 sm:px-7">
                <div className="grid grid-cols-[1.4fr_1fr_1fr_0.7fr] gap-x-3 pb-3">
                  <span className="caption">By channel</span>
                  <span className="caption text-right">Revenue</span>
                  <span className="caption text-right">Ad cost</span>
                  <span className="caption text-right">ROAS</span>
                </div>
                {CHANNELS.map((c) => (
                  <div key={c} className="grid grid-cols-[1.4fr_1fr_1fr_0.7fr] items-center gap-x-3 border-t border-white/10 py-3 text-[14px] sm:text-[15px]">
                    <span className="text-[var(--fg)]">{c}</span>
                    <span className="text-right"><Hidden w="••••" /></span>
                    <span className="text-right"><Hidden w="••••" /></span>
                    <span className="mono text-right text-[var(--fg3)]">•••</span>
                  </div>
                ))}
                <div className="grid grid-cols-[1.4fr_1fr_1fr_0.7fr] items-center gap-x-3 border-t border-white/10 py-3 text-[14px] sm:text-[15px]">
                  <span className="text-[var(--fg)]">Returns and RTO</span>
                  <span className="col-span-3 text-right"><span className="mono text-[var(--fg3)]">••• %</span></span>
                </div>
              </div>

              <div className="border-t border-white/10 px-5 py-5 sm:px-7">
                <p className="caption">Next month&apos;s three moves</p>
                <div className="mt-3 flex flex-col gap-2.5" aria-hidden="true">
                  {[78, 62, 70].map((w, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <span className="mono text-[12px] text-[var(--link)]">0{i + 1}</span>
                      <span className="h-2 rounded-full bg-white/10" style={{ width: `${w}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="caption mt-4">A layout, not a sample: a real report carries your own figures.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
