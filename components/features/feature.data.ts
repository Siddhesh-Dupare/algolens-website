import {
  GitBranch,
  PlayCircle,
  Boxes,
  MemoryStick,
  FileCode2,
  ChartColumn,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  firstTitle: string;
  secondTitle: string;
  description: string;
  symbol: LucideIcon;
  pageNumber: string;
};

export const features: FeatureCardProps[] = [
  {
    firstTitle: "Algorithm",
    secondTitle: "Visualization",
    description:
      "Transform algorithms into interactive visual representations to understand every operation step by step.",
    symbol: GitBranch,
    pageNumber: "01/06",
  },
  {
    firstTitle: "Execution",
    secondTitle: "Tracing",
    description:
      "Follow your code line by line and observe how variables and control flow change during execution.",
    symbol: PlayCircle,
    pageNumber: "02/06",
  },
  {
    firstTitle: "Data Structure",
    secondTitle: "Explorer",
    description:
      "Visualize arrays, linked lists, trees, graphs, and other data structures as they evolve in real time.",
    symbol: Boxes,
    pageNumber: "03/06",
  },
  {
    firstTitle: "Memory",
    secondTitle: "Visualization",
    description:
      "Inspect variables, memory states, and object lifecycles to gain a deeper understanding of program behavior.",
    symbol: MemoryStick,
    pageNumber: "04/06",
  },
  {
    firstTitle: "C++ Code",
    secondTitle: "Analysis",
    description:
      "Leverage LibClang-powered analysis to parse code and uncover its underlying structure and relationships.",
    symbol: FileCode2,
    pageNumber: "05/06",
  },
  {
    firstTitle: "Performance",
    secondTitle: "Metrics",
    description:
      "Analyze execution time, complexity, and performance insights to optimize your algorithms effectively.",
    symbol: ChartColumn,
    pageNumber: "06/06",
  },
];
