import { cn } from "@/lib/utils";

export const Header = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2
      className={cn(
        "text-lg font-bold text-neutral-800 dark:text-neutral-200",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const Paragraph = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-neutral-600 dark:text-neutral-400 max-w-[90%] mt-2",
        className
      )}
    >
      {children}
    </p>
  );
};

export const Card = ({className, children}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('bg-neutral-100 my-2  dark:bg-neutral-800 rounded-tl-2xl flex flex-1 h-full w-full justify-center gap-4 items-start',
                            'mask-b-from-90% mask-r-from-90% ml-2',
                            className)}>
            {children}
        </div>
    )
}