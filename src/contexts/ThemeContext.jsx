import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext();
const ThemeContextProvider = (props) => {
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("dark")));
    const dark="bg-[#121212] text-[#eee] border-[#333]";
    const light="bg-white text-[#333] border-[#ddd]";
    const ui=isDark ? "border-gray-500 bg-[#333]" : "border-gray-400 bg-[#F2F2F2]";
    const green=isDark ? "text-[#32de6b]":"text-[#00AB66]";
    const button=isDark ? "bg-[#32de6b] text-black" :"bg-[#00ab66] text-white";
    const theme=isDark ? dark :light;
    console.log(theme)
    useEffect(()=>{
        setIsDark(JSON.parse(localStorage.getItem("dark")));
    },[isDark])
    return (
        <ThemeContext.Provider value={{theme,setIsDark,isDark,ui,green,button}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;