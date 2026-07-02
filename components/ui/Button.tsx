import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex h-12 items-center justify-center gap-2 rounded-full px-8 text-base font-semibold transition-all";
  const variants = {
    primary:
      "bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]",
    secondary:
      "border border-slate-700 bg-slate-900/50 text-white backdrop-blur-md hover:bg-slate-800/50",
    ghost: "text-cyan-400 hover:text-cyan-300",
  };

  const content = (
    <>
      {children}
      {icon}
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
