'use client';

import { createContext, useContext, useState } from "react";

const Context = createContext<any>({
    isOpen: false,
});

const NavBarContext = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <Context.Provider value={{isOpen, setIsOpen}}>
        {children}
    </Context.Provider>
  )
}

export const useNavBarContext = () => useContext(Context); 
export default NavBarContext