import { cn } from "@/lib/utils";

export const GradientBadge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("h-10 mt-10 w-100 p-[1.9px]   relative rounded-4xl",
                    "flex items-center justify-center overflow-hidden",
                className)}
    >
       <div className="absolute inset-0 scale-1500 bg-[conic-gradient(at_center,transparent,var(--color-yellow-400),17%,transparent_15%)] dark:bg-[conic-gradient(at_center,transparent,var(--color-yellow-500),5%,transparent_15%)] animate-[spin_4s_linear_infinite] "></div>

       <div className={cn(
            "h-full w-full flex items-center justify-center rounded-[calc(2.25rem-1px)]",
            "bg-neutral-700 dark:bg-neutral-900 z-10 text-white",
        )}>
            
            {children}
        </div>
      
    </div>
  );
};
