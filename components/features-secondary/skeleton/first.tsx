import { CardSkeleton } from "@/components/features/card"
import { cn } from "@/lib/utils"

export const FirstFeature = ({className}:{className? : string}) => {
  return (
       <div className={cn("pt-4 pr-12", className)}
                >
                    <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 "> Agent Studio</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mt-2">
                        Design, launch, and customize AI agents for marketing, sales, support, and ops built around your workflows. 
                    </p>
                    <CardSkeleton>
                          <div className="bg-gray-200 dark:bg-neutral-700 rounded-lg mx-auto min-h-70 min-w-[85%]">
                            <CardBox
                                iconBgColor = "bg-green-500"
                                icon = {<ConnectData className="size-7 text-white" />}
                                title = "Content Data"
                                description = "Design, launch, and customize AI agents for marketing, sales, support, and ops built around your workflows."
                                >
                                  <Token 
                                    icon = {<Sales className="size-5 text-orange-500" />}
                                    text = "Salesforce"
                                    />
                                    <Token 
                                    icon = {<Hub className="size-5 text-yellow-500" />}
                                    text = "Hubspot"
                                    />
                                    <Token 
                                    icon = {<Sheets className="size-5 text-green-500" />}
                                    text = "Sheets"
                                    />
                                </CardBox>
                                <CardBox 
                                iconBgColor = "bg-blue-500"
                                icon = {<Setting className="size-7  text-white" />}
                                title = "Define processing logic"
                                description="Create workflows, decision points, and conditional actions for each task"
                                />

                                <CardBox 
                                iconBgColor = "bg-red-500"
                                icon = {<Error className="size-7 b text-white" />}
                                title = "Manage errors"
                                description="Add retries, fallback paths, and to handle failures automatically"
                                />
                          
                          
                    </div>  
                   


                    
                    </CardSkeleton>
                </div>
  )
}



export const Token = ({ icon, text }: { 
  icon: React.ReactNode,
  text: string


}) => {
  return(
    <div className="bg-neutral-50 dark:bg-neutral-800 flex justify-center items-center border border-neutral-400 hover:border-neutral-900 rounded-lg  px-2 py-0.5 gap-1 cursor-pointer group">
      <div className="size-5 flex justify-center items-center group-hover:-translate-x-1 transition duration-200">
        {icon}
      </div>
      <p className="text-xs font-display  group-hover:-translate-x-1 transition duration-200"> {text}</p>
    </div>
  )
}

export const CardBox = ({
  
  iconBgColor = "bg-green-500",
  icon,
  title,
  description,
  children
}: {
  className?: string
  iconBgColor?: string
  icon: React.ReactNode
  title: string
  description: string
  children?: React.ReactNode
}) => {
  return (
      <Card>
        <div className={cn("flex items-center justify-center rounded-full w-8 h-8 px-1 ml-4 mt-6", iconBgColor)}>
          {icon}
        </div>
        
        <div className="mt-6">
          <h2 className="font-semibold">{title}</h2>
          <p className="text-xs text-neutral-500 pb-4 w-[80%]">{description}</p>

          {children && (
            <div className="flex gap-2 w-full h-full  flex-wrap">
              {children}
            </div>
          )}
        </div> 
      </Card>
    
  )
}
export const SkeletonOne = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div className={cn("p-4 bg-neutral-200 max-w-sm mx-auto absolute w-full h-full inset-x-0 rounded-t-lg border border-neutral-200", className)}>
      {children}
    </div>
  )
}
export const Card = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <div className={cn('bg-neutral-100 pb-4 m-3 dark:bg-neutral-800 rounded-lg flex  gap-4 items-start',className)}>
            {children}
        </div>
    )
}

export const ConnectData = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
      <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
      <path d="M3 21l2.5 -2.5" />
      <path d="M18.5 5.5l2.5 -2.5" />
      <path d="M10 11l-2 2" />
      <path d="M13 14l-2 2" />
    </svg>
  );
};




export const Setting = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M11.445 20.913a1.665 1.665 0 0 1 -1.12 -1.23a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.31 .318 1.643 1.79 .997 2.694" />
      <path d="M15 19l2 2l4 -4" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
  );
};



export const Error = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
      <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
      <path d="M3 13l4 0" />
      <path d="M17 13l4 0" />
      <path d="M12 20l0 -6" />
      <path d="M4 19l3.35 -2" />
      <path d="M20 19l-3.35 -2" />
      <path d="M4 7l3.75 2.4" />
      <path d="M20 7l-3.75 2.4" />
    </svg>
  );
};


export const Sales = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M12 17v1m0 -8v1" />
    </svg>
  );
};


export const Hub = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
      <path d="M7 15v-5h5v5h5v-5" />
    </svg>
  );
};


export const Sheets = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M8 11h8v7h-8z" />
      <path d="M8 15h8" />
      <path d="M11 11v7" />
    </svg>
  );
};
