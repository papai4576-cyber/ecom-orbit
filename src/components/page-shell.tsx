import { ReactNode } from "react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: "64px" }}>{children}</main>
      <Footer />
    </>
  );
}
