import type { ComponentType } from "react";
import {
  PriceChartVisual,
  SequenceAlignVisual,
  TreeVisual,
  SplitBlocksVisual,
  BrowserVisual,
  CalculatorVisual,
} from "../components/visuals/ProjectVisuals";

export interface Project {
  n: string;
  name: string;
  category: string;
  tech: string[];
  desc: string;
  details: string[];
  Visual: ComponentType;
  github: string;
}

export const PROJECTS: Project[] = [
  {
    n: "01",
    name: "KrishiHedg",
    category: "AI-Powered Agricultural Price Risk & Hedging Platform",
    tech: ["React + Vite", "Node.js / Express", "Python FastAPI", "SQLAlchemy", "Razorpay", "JWT"],
    desc: "Built a full-stack platform helping farmers monitor commodity prices, assess price risk and act on hedging plans, combining a React frontend, an Express API layer and a Python FastAPI analytics service.",
    details: [
      "Risk-scoring and price-forecasting modules in Python/FastAPI",
      "Marketplace functionality",
      "Secure Razorpay checkout",
      "JWT authentication",
      "Role-based access control",
    ],
    Visual: PriceChartVisual,
    github: "https://github.com/parthalti",
  },
  {
    n: "02",
    name: "Longest Common Subsequence",
    category: "DNA Sequence Alignment",
    tech: ["Python", "Jupyter Notebook", "Dynamic Programming"],
    desc: "Implemented a dynamic programming algorithm computing the LCS between DNA sequences, returning both alignment length and the reconstructed subsequence.",
    details: ["Applied bottom-up tabulation to eliminate redundant recursive computation."],
    Visual: SequenceAlignVisual,
    github: "https://github.com/parthalti",
  },
  {
    n: "03",
    name: "Optimal Binary Search Tree",
    category: "Smart Library Search Optimization",
    tech: ["Python", "Dynamic Programming"],
    desc: "Built an Optimal BST algorithm minimizing average search cost for a library catalogue based on lookup frequencies.",
    details: ["Used dynamic programming across subproblems to evaluate and select optimal tree structures."],
    Visual: TreeVisual,
    github: "https://github.com/parthalti",
  },
  {
    n: "04",
    name: "Subarray Allocation Solver",
    category: "Divide & Conquer",
    tech: ["Python", "Jupyter Notebook"],
    desc: "Designed a divide-and-conquer algorithm to find the maximum-sum subarray for a simulated resource allocation scenario.",
    details: ["Benchmarked time-complexity trade-offs between brute-force and divide-and-conquer approaches."],
    Visual: SplitBlocksVisual,
    github: "https://github.com/parthalti",
  },
  {
    n: "05",
    name: "Personal Portfolio Website",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    desc: "Built and deployed a personal portfolio site on GitHub Pages showcasing projects, skills and contact information.",
    details: [],
    Visual: BrowserVisual,
    github: "https://github.com/parthalti",
  },
  {
    n: "06",
    name: "Calculator App",
    category: "Web Development",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "Developed a browser-based calculator supporting core arithmetic with real-time input handling in vanilla JavaScript.",
    details: [],
    Visual: CalculatorVisual,
    github: "https://github.com/parthalti",
  },
];
