import { Hero } from "@/components/home/hero";
import { SystemsGrid } from "@/components/home/systems-grid";
import { FeaturedProjects } from "@/components/home/featured-projects";
import { Philosophy } from "@/components/home/philosophy";
import { LatestInsights } from "@/components/home/latest-insights";
import { RecruiterCta } from "@/components/home/recruiter-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SystemsGrid />
      <FeaturedProjects />
      <Philosophy />
      <LatestInsights />
      <RecruiterCta />
    </>
  );
}
