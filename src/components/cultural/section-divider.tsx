import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div className={cn("py-12 md:py-16 w-full max-w-2xl mx-auto", className)}>
      <div className="h-px bg-[var(--color-terracotta)] opacity-20" />
    </div>
  );
}
