import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Solution } from "@/components/solution";
import { Agents } from "@/components/agents";
import { Features } from "@/components/features";
import { PoweredBy } from "@/components/powered-by";
import { Extensibility } from "@/components/extensibility";
import { HowItWorks } from "@/components/how-it-works";
import { Metrics } from "@/components/metrics";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Agents />
        <Features />
        <PoweredBy />
        <Extensibility />
        <HowItWorks />
        <Metrics />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
