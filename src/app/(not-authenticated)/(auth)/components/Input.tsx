import { cn } from "@/lib/utils"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder: string,
    icon?: React.ReactNode,
    classname? : string,
    className?: string,
    h?: boolean,
}
export const Input = ({ placeholder, h=true, icon, classname, className, ...props } : InputProps) => {
    return(
        <div className={cn(`mb-2 ` + classname)}>
            <label htmlFor={props.id} className="block text-[10.5px] mx-21 pl-[14px] text-[#5b728c] mb-1">{placeholder}</label>
            <div className={"relative  bg-black " + h && 'h-[3rem]'} >
                <span 
                    className="absolute left-0 top-[50%] -translate-y-1/2 text-[#5b728c]"
                >
                    {icon}
                </span>
                <input
                    {...props}
                    style={{background: 'rgb(232, 240, 254)'}}
                    className={cn(`w-full border border-[#363c4e] rounded-[7px] ${icon ? 'pl-[3.5rem]' : 'pl-2.5'} text-black h-[3rem] text-base ` + className)}
                />
            </div>
        </div>
    )
}

export const CheckBox = ({ placeholder, ...props } : InputProps) => {
    return(
        <div>
            <input 
                type="checkbox" 
                name="" 
                id="" 
            />
            <label htmlFor=""></label>
        </div>
    )
}