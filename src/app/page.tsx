import CallToAction from "@/components/landing/CallToAction";
import Features from "@/components/landing/Features";
import Hero from "@/components/landing/Hero";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Features/>
      <CallToAction />
    </main>
  );
}
