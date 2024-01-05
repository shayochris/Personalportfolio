import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext();
const ThemeContextProvider = ({ children }) => {
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("dark")));
    const ui=isDark ? "bg-[#282828]" : "bg-[#eee]";
    const theme=isDark ? "bg-[#121212] text-[#FFFFFF]" : "bg-[#FFFFFF] text-gray-600";
    const border = isDark ? "border-[#404040]" : "border-[#ddd]"
    useEffect(()=>{
        setIsDark(JSON.parse(localStorage.getItem("dark")));
    },[isDark])
    return (
        <ThemeContext.Provider value={{theme,setIsDark,isDark,ui,border}}>
            {children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;
