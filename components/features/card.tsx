import { cn } from "@/libs/utils"

export const Card = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('bg-neutral-100 pb-10 lg:pb-0 dark:bg-neutral-800 rounded-lg w-full',className)}>
            {children}
        </div>
    )
}

export const CardTitle = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <h3 className={cn('text-2xl font-semibold text-neutral-800 dark:text-neutral-200 pt-10 lg:pt-0',className)}>
            {children}
        </h3>
    )
}
export const CardContent = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('text-2xl font-semibold text-neutral-800 dark:text-neutral-200 px-4 pb-6',className)}>
            {children}
        </div>
    )
}

export const CardCTA = ({className, children}: React.ComponentProps<'button'>) => {
    return (
        <button className={cn('size-5 md:size-10 shrink-0 rounded-full border border-neutral-800 dark:border-neutral-200 flex items-center justify-center active:scale-95 transition duration-200 font-semibold text-neutral-800 dark:text-neutral-200 cursor-pointer  ',className)}>
            {children}
        </button>
    )
}

export const CardSkeleton = ({className, children}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('h-100 md:h-100 relative overflow-hidden flex flex-col items-center justify-center perspective-distant w-full   md:max-w-100 mx-auto',className)}>
            {children}
        </div>
    )
}





