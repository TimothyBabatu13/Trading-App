import { DetailedHTMLProps, InputHTMLAttributes } from "react"

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    placeholder: string,
    icon?: React.ReactNode,
}
export const Input = ({ placeholder, icon, ...props } : InputProps) => {
    return(
        <div className="mb-2">
            <label className="block text-[10.5px] mx-21 pl-[14px] text-[#5b728c] mb-1">{placeholder}</label>
            <div className="relative h-[3rem] bg-black">
                <span 
                    className="absolute left-0 top-[50%] -translate-y-1/2 text-[#5b728c]"
                >
                    {icon}
                </span>
                <input
                    {...props}
                    style={{background: 'rgb(232, 240, 254)'}}
                    className="w-full border border-[#363c4e] rounded-[7px] pl-[3.5rem] text-black h-[3rem] text-base"
                />
            </div>
        </div>
    )
}