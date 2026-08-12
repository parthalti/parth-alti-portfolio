import {
  Code2,
  Coffee,
  Braces,
  Terminal,
  Atom,
  Zap,
  Server,
  Rocket,
  Gauge,
  Database,
  Layers,
  KeyRound,
  GitBranch,
  Github,
  Boxes,
  Sigma,
  TrendingUp,
  GitFork,
  Globe,
  Lightbulb,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface TechItem {
  label: string;
  Icon: LucideIcon;
}

export const TECH_ITEMS: TechItem[] = [
  { label: "Python", Icon: Code2 },
  { label: "Java", Icon: Coffee },
  { label: "JavaScript", Icon: Braces },
  { label: "C", Icon: Terminal },
  { label: "React", Icon: Atom },
  { label: "Vite", Icon: Zap },
  { label: "Node.js", Icon: Server },
  { label: "Express", Icon: Rocket },
  { label: "FastAPI", Icon: Gauge },
  { label: "SQL", Icon: Database },
  { label: "REST APIs", Icon: Layers },
  { label: "JWT", Icon: KeyRound },
  { label: "Git", Icon: GitBranch },
  { label: "GitHub", Icon: Github },
  { label: "Data Structures", Icon: Boxes },
  { label: "Algorithms", Icon: Sigma },
  { label: "Dynamic Programming", Icon: TrendingUp },
  { label: "Divide & Conquer", Icon: GitFork },
  { label: "Web Development", Icon: Globe },
  { label: "Problem Solving", Icon: Lightbulb },
  { label: "Software Engineering", Icon: Wrench },
];
