'use client';

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export const CreateAccountButton = () => {
    const router = useRouter();
    return(
        <Button onClick={()=> router.push('/register')} className="border w-[158.615px] mb-3 phone:mb-0 border-lightGreen text-lightGreen rounded-[5px] py-[6px] px-[20px] text-sm mr-3">CREATE ACCOUNT</Button>
    )
}

export const LoginButton = () => {
    const router = useRouter();
    return(
        <Button onClick={()=> router.push('/login')} className="bg-lightGreen w-[158.615px] rounded-[10px] py-[6px] px-[20px] text-sm">LOG IN ACCOUNT</Button>
    )
}