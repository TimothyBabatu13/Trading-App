'use client';
import { cn } from "@/lib/utils"
import { Power } from "lucide-react"
import { useRouter } from "next/navigation";

export const LogOutButton = ({ className, children } : {
    className?: string,
    children?: React.ReactNode
})  => {
    const router = useRouter();
    const handleLogOut = () => {
        const result = confirm('Are you sure you want to log out?');
        if(result){
            router.push('/')
        }
    }
    return(
        <div onClick={handleLogOut} role="button" className="flex items-center">
            <Power 
                className={cn("mr-2.5 "+ className )}
            />
            {children}
        </div>
    )
}
