import type { ReactNode } from "react";
import { AnimatedSection } from "@/components/motion/animated-section";
import { CaseStudyImage } from "./case-study-image";
import type { Project } from "@/types/content";

export function CaseStudyContent({ project }: { project: Project }) {
  return (
    <div className="space-y-20">
      <AnimatedSection id="overview" title="Project Overview">
        <p>{project.description}</p>
        <p>
          <strong>Focus:</strong> {project.focus}
        </p>
        <ul>
          {project.themes.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <CaseStudyImage alt={`${project.title} overview`} caption="Platform overview — placeholder" />
      </AnimatedSection>

      <AnimatedSection id="problem" title="Problem">
        <p>{project.problem}</p>
        <p>{project.challenge}</p>
      </AnimatedSection>

      <AnimatedSection id="research" title="Research">
        <p>
          I led discovery across operators, team leads, and leadership—mapping
          current workflows, pain points, and success metrics before defining
          the product direction.
        </p>
        <CaseStudyImage alt="Research synthesis" caption="Research artifacts — placeholder" />
      </AnimatedSection>

      <AnimatedSection id="stakeholders" title="Stakeholder Interviews">
        <p>
          Interviews with collection agents, ops managers, and executives
          surfaced misaligned incentives, manual handoffs, and reporting gaps
          that no single screen could fix alone.
        </p>
      </AnimatedSection>

      <AnimatedSection id="insights" title="Key Insights">
        <ul>
          <li>Process clarity must precede interface design.</li>
          <li>Operators need speed; leadership needs visibility.</li>
          <li>Every handoff is a potential failure point.</li>
        </ul>
      </AnimatedSection>

      <AnimatedSection id="flows" title="User Flows">
        <p>
          End-to-end flows were mapped for primary jobs-to-be-done—from account
          intake through resolution and reporting.
        </p>
        <CaseStudyImage alt="User flow diagrams" caption="Core user flows — placeholder" />
      </AnimatedSection>

      <AnimatedSection id="ia" title="Information Architecture">
        <p>
          Navigation and data hierarchy were structured around operational
          roles—reducing cognitive load for daily users while preserving
          drill-down for managers.
        </p>
      </AnimatedSection>

      <AnimatedSection id="wireframes" title="Wireframes">
        <p>
          Low-fidelity explorations validated layout and workflow before visual
          execution—tested with operators for task completion speed.
        </p>
        <CaseStudyImage alt="Wireframes" caption="Wireframe explorations — placeholder" />
      </AnimatedSection>

      <AnimatedSection id="designs" title="Final Designs">
        <p>
          High-fidelity UI applied a restrained system: dark surfaces, clear
          typographic hierarchy, and accent used only for primary actions and
          status.
        </p>
        <CaseStudyImage alt="Final UI designs" caption="Final interface — placeholder" />
        <CaseStudyImage alt="Dashboard view" caption="Operations dashboard — placeholder" />
      </AnimatedSection>

      <AnimatedSection id="impact" title="Business Impact">
        <p>{project.outcome}</p>
        <p>
          Teams reported faster case handling, fewer reconciliation errors, and
          leadership dashboards that answered real questions—not just displayed
          data.
        </p>
      </AnimatedSection>

      <AnimatedSection id="lessons" title="Lessons Learned">
        <p>
          Designing for operations means respecting edge cases, exceptions, and
          the humans who work around broken tools every day.
        </p>
      </AnimatedSection>

      <AnimatedSection id="next" title="Next Steps">
        <p>
          Expand analytics modules, deepen integrations with core banking
          systems, and continue operator-led iteration cycles.
        </p>
      </AnimatedSection>
    </div>
  );
}
