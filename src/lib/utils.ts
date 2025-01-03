import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const checkIfFormValueIsEmpty = (str:FormDataEntryValue | null) => {
  if(str == null) return
  return !!str.toString().trim()
}