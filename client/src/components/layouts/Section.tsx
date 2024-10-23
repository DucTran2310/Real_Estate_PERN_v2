import { ReactNode } from "react";
import { cn } from "@/lib/utils"

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
  isBack?: boolean;
  onBack?: () => void;
}

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className,
  isBack,
  onBack,
}) => {
  return (
    <div
      className={cn(
        "rounded-md bg-white space-y-6 mt-5 border p-6 border-slate-200",
        className
      )}
    >
      <h2 className="text-2xl font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Section;
