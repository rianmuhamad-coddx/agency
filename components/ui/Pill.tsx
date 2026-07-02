import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-slate-700/50 bg-slate-900/50 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
