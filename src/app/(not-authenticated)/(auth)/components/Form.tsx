import { DetailedHTMLProps, FormHTMLAttributes } from "react"

interface FormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>{
    children: React.ReactNode
}
export const Form = ({ children, ...props } : FormProps) => {
    return(
        <form {...props} className="bg-[#0b1118] w-[80%] mx-auto p-6 rounded-[10px]">
            {children}
        </form>
    )
}
