import { cn } from "@/libs/utils"

export const Card = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('bg-neutral-100 dark:bg-neutral-800 rounded-lg',className)}>
            {children}
        </div>
    )
}

export const CardTitle = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <h3 className={cn('text-2xl font-semibold text-neutral-800 dark:text-neutral-200',className)}>
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

export const CardCTA = ({className, children, ...rest}: React.ComponentProps<'button'>) => {
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
        <div className={cn('min-h-40 md:min-h-80',className)}>
            {children}
        </div>
    )
}





