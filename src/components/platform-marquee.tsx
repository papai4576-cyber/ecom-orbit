const rowA = ["Shopify", "WooCommerce", "Meta Ads", "Google Ads", "SEO", "Shiprocket", "Delhivery"];
const rowB = ["Amazon", "Flipkart", "Meesho", "Myntra", "Nykaa", "Blinkit", "Zepto", "Instamart"];

function Row({ items, reverse = false, solid = false }: { items: string[]; reverse?: boolean; solid?: boolean }) {
  // The list is doubled so the loop is seamless; the copy is hidden from assistive tech.
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className={`marquee-track ${reverse ? "reverse" : ""} ${solid ? "solid" : ""}`}>
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="marquee-item" aria-hidden={i >= items.length ? "true" : undefined}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Type as the visual: the platforms we work on, oversized and drifting. No copy beyond the names. */
export function PlatformMarquee() {
  return (
    <section className="tone-light overflow-hidden py-[clamp(48px,7vw,96px)]" aria-label="Platforms we work on">
      <p className="sr-only">
        Platforms we work on: {rowA.join(", ")}, {rowB.join(", ")}.
      </p>
      <div className="flex flex-col gap-3 sm:gap-5">
        <Row items={rowA} />
        <Row items={rowB} reverse solid />
      </div>
    </section>
  );
}
