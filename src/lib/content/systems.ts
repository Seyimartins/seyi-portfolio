import type { SystemCategory } from "@/types/content";

export const systemCategories: SystemCategory[] = [
  {
    id: "financial",
    title: "Financial Systems",
    description:
      "Products that move money, manage risk, and give operators confidence in every transaction.",
    examples: [
      "Debt collection workflows",
      "Loan lifecycle management",
      "Payment reconciliation dashboards",
    ],
  },
  {
    id: "operational",
    title: "Operational Systems",
    description:
      "Internal tools and workflows that reduce friction for teams running complex day-to-day operations.",
    examples: [
      "Asset tracking & inventory",
      "Field operations consoles",
      "Process automation interfaces",
    ],
  },
  {
    id: "service",
    title: "Service Platforms",
    description:
      "Multi-sided experiences that connect customers, staff, and logistics across locations.",
    examples: [
      "Order management hubs",
      "Multi-location service ops",
      "Customer journey orchestration",
    ],
  },
  {
    id: "knowledge",
    title: "Knowledge Systems",
    description:
      "Interfaces that help teams learn, decide, and act on the right information at the right time.",
    examples: [
      "Operational reporting",
      "Training & onboarding flows",
      "Decision-support dashboards",
    ],
  },
];
