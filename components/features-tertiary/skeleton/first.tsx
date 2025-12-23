import { cn } from "@/lib/utils"
import { IconBackground, IconClock, IconClockDollar, IconClockHour5, IconMailAi, IconSeo, IconSocial, IconUserBitcoin, IconUserBolt } from "@tabler/icons-react"
import { motion } from "framer-motion"
import { Card, Header, Paragraph } from "./comp"

const divElement = [
  {
    icon: <IconMailAi  className="size-4 text-white"/> ,
    icon_bg: "bg-blue-600",
    icon2: <IconClock className="size-3" />,
    text2: "10s",
    text: "Personalized email",
    description: "Personalized email sent to .....gmail.com"

  }, 
  {
    icon: <IconUserBitcoin className="size-4 text-white" /> ,
    icon_bg: "bg-green-500",
    text: "Peer Review",
    description: "Reviewed and approved two outputs for accuracy.",
    badge: "Failed",
    bg: "bg-red-300",
    badge_text_color: "text-red-800"
  },
  {
    icon: <IconBackground className="size-4 text-white" /> ,
    icon_bg: "bg-orange-600",
    text: "Content drafting",
    description: "Generated draft campaign brief.",
    badge: "processing",
    bg: "bg-orange-300",
    badge_text_color: "text-orange-800"
  },
  {
    icon: <IconUserBolt className="size-4 text-white" /> ,
    icon_bg: "bg-teal-700",
    text: "Admin approval",
    description: "Final approval of marketing copy by admin.",
    badge: "processing",
    bg: "bg-orange-300",
    badge_text_color: "text-orange-800"

  },
  {
    icon: <IconClockHour5  className="size-4 text-white"/> ,
    icon_bg: "bg-purple-800/70",
    icon2: <IconClock className="size-3" />,
    text2: "2m",
    text: "Weekly Campaign Report",
    description: "Generated campaign performance."
  },
  {
    icon: <IconSeo className="size-4 text-white" /> ,
    icon_bg: "bg-red-700/60",
    text: "SEO audit",
    description: "Reviewed and approved two outputs for SEO optimization.",
    badge: "Failed",
    bg: "bg-red-300",
    badge_text_color: "text-red-800"
  },
   {
    icon: <IconClockDollar className="size-4 text-white" /> ,
    icon_bg: "bg-green-700",
    text: "Price monitoring agent",
    description: "Generated draft campaign brief.",
    badge: "Completed.",
    bg: "bg-green-00",
    badge_text_color: "text-green-800"
  }
]
export const First = ({className}:{className? : string}) => {
  return (
       <div className={cn("pt-4 overflow-hidden w-full md:w-120 h-full ", className)}
                >
                    <Header> Audit trails</Header>  
                    <Paragraph className="mb-10" > Tracks every agent action with full visibility and timestamps</Paragraph>   
                    
                          <div className="bg-gray-200 dark:bg-neutral-700 relative rounded-tl-3xl mx-auto   w-120 md:w-120 flex flex-col mt-10 gap-4 mask-b-from-40%">
                            <Card >
                                <div className="flex gap-2 p-3 absolute inset-x-0 border-b border-neutral-300 dark:border-neutral-600 items-center">
                                  <div><IconSocial className="size-5" /></div>
                                  <p className="text-sm text-neutral-600 dark:text-neutral-400 font-bold"> Recent activity</p>

                                </div>

                                <div className="flex flex-col gap-4 w-full h-full mt-10 p-3 overflow-hidden">
                                  {divElement.map((item, index) => (
                                     <motion.div
                                      initial={{ opacity: 0, y: 10 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                     key={ index } className="flex justify-between items-center">
                                    <div className="flex  gap-2 items-center justify-center">
                                       <div className="flex  gap-2 items-center justify-center">
                                          <div className={cn("size-5 shadow-lg rounded-xs bg-neutral-100  dark:bg-neutral-600 flex items-center justify-center", item.icon_bg )}>
                                         
                                         {item.icon}
                                         
                                        </div>
                                     <p className="text-xs font-semibold">{item.text}</p>
                                       </div>
                                     
                                      {!item.badge ? (
                                        <Badge text={item.text2} icon={item.icon2} />
                                      ) : (
                                        <Badge className={item.bg} badge_text_color={item.badge_text_color}  >
                                          {item.badge}
                                        </Badge>
                                      )}
                                      
                                    </div>
                                    {/* Problem div starts. */}
                                    <div className="w-fit absolute left-70">
                                      <p className={cn("text-sm px-2 py-0.5 whitespace-nowrap text-neutral-500")}> {item.description} </p>
                                    </div>
                                    {/* Problem div ends. */}

                                   </motion.div> 
                                  ))}
                                   
                                </div>

                            </Card>
                              
                                
                              
                    
                          
                          
                    </div>  
                   


                    
                    </div>
                
  )
}



export const Badge = ({className, children, icon, text, badge_text_color }: {
    className?: string,
    children?: React.ReactNode,
    icon?: React.ReactNode,
    text?: string,
    badge_text_color?: string
}) => {
    return (
        <div className={cn(" px-1 py-1 rounded-md flex items-center gap-1 ring-1 ring-neutral-300 dark:ring-neutral-500 shadow", className)}>
            {icon}
            <p className="text-[10px] font-bold text-neutral-600 dark:text-neutral-300"> {text}</p>
            {children && (
                    <p className={cn("text-xs font-semibold px-1  tracking-tight", badge_text_color)}>{children}</p>
                
            )}
        </div>
    )
}






