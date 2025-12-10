import { cn } from "@/lib/utils"
import { IconBackground, IconClock, IconMailAi, IconSocial, IconUserBitcoin } from "@tabler/icons-react"

const divElement = [
  {
    icon: <IconMailAi  className="size-4"/> ,
    icon2: <IconClock className="size-3" />,
    text2: "10s",
    text: "Personalized email",
    description: "Personalized email sent to .....gmail.com"
  }, 
  {
    icon: <IconUserBitcoin className="size-4" /> ,
    text: "Sales data updated",
    description: "Sales data updated in the dashboard",
    badge: "processing",
    bg: "bg-green-100"
  },
  {
    icon: <IconBackground className="size-4" /> ,
    text: "Content drafting",
    description: "Successfully connected to Hub",
    badge: "processing",
    bg: "bg-orange-300"
  }
]
export const First = ({className}:{className? : string}) => {
  return (
       <div className={cn("pt-4 overflow-hidden max-w-120", className)}
                >
                    <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-200 "> Audit trails</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-[90%]  mt-2">
                        Tracks every red agent action with full input/output visibility and timestamps. 

                    </p>
                    
                          <div className="bg-gray-200 dark:bg-neutral-700 relative rounded-tl-3xl mx-auto min-h-70 w-full flex flex-col mt-5 gap-4">
                            <Card>
                                <div className="flex gap-2 p-3 absolute inset-x-0 border-b border-neutral-300 dark:border-neutral-600 items-center">
                                  <div><IconSocial className="size-5" /></div>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-bold"> Recent activity</p>

                                </div>

                                <div className="flex flex-col gap-4 w-full h-full mt-10 p-3 overflow-hidden">
                                  {divElement.map((item, index) => (
                                     <div key={ index } className="flex justify-between items-center">
                                    <div className="flex  gap-2 items-center justify-center">
                                       <div className="flex  gap-2 items-center justify-center">
                                          <div className="size-5 ring-1 ring-neutral-300 dark:ring-neutral-600 rounded-xs bg-green-100 dark:bg-neutral-600 flex items-center justify-center">
                                         
                                         {item.icon}
                                         
                                        </div>
                                     <p className="text-xs font-semibold">{item.text}</p>
                                       </div>
                                     
                                      {!item.badge ? (
                                        <Badge text={item.text2} icon={item.icon2} />
                                      ) : (
                                        <Badge className={item.bg}>
                                          {item.badge}
                                        </Badge>
                                      )}
                                      
                                    </div>
                                    {/* Problem div starts. */}
                                    <div className="w-fit absolute left-70">
                                      <p className="text-sm px-2 py-0.5 whitespace-nowrap text-neutral-500"> {item.description} </p>
                                    </div>
                                    {/* Problem div ends. */}

                                   </div> 
                                  ))}
                                   
                                </div>

                            </Card>
                              
                                
                              
                    
                          
                          
                    </div>  
                   


                    
                    </div>
                
  )
}



export const Badge = ({className, children, icon, text}: {
    className?: string,
    children?: React.ReactNode,
    icon?: React.ReactNode,
    text?: string
}) => {
    return (
        <div className={cn(" px-1 py-1 rounded-md flex items-center gap-1 ring-1 ring-neutral-300 dark:ring-neutral-500 shadow", className)}>
            {icon}
            <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300"> {text}</p>
            {children && (
                    <p className="text-xs text-neutral-600  dark:text-neutral-600 font-semibold px-1  tracking-tight">{children}</p>
                
            )}
        </div>
    )
}



export const Card = ({className, children}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('bg-neutral-100 my-2  dark:bg-neutral-800 rounded-tl-2xl flex absolute inset-x-2 flex-1 h-full w-full justify-center gap-4  items-start',className)}>
            {children}
        </div>
    )
}


