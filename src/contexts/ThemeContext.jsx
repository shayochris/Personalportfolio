import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext();
const ThemeContextProvider = ({ children }) => {
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("dark")));
    const ui=isDark ? "bg-[#282828]" : "bg-[#282828]";
    const theme=isDark ? "bg-[#121212] text-[#FFFFFF]" : "bg-[[#121212] text-[#FFFFFF]";
    const border = isDark ? "border-[#282828]" : "border-[#282828]"
    console.log(theme)
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
