import { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/** The nav floats, so each page's first section sets its own top padding. */
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
