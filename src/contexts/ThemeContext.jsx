import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const ThemeContext=createContext();
const ThemeContextProvider = (props) => {
    const [isDark,setIsDark]=useState(JSON.parse(localStorage.getItem("dark")));
    const dark="bg-[#333] text-[#eee] border-[#555]";
    const light="bg-white text-[#333] border-[#ddd]";
    const ui=isDark ? "bg-[#555]" : "bg-[#F2F2F2]";
    const theme=isDark ? dark :light;
    console.log(theme)
    useEffect(()=>{
        setIsDark(JSON.parse(localStorage.getItem("dark")));
    },[isDark])
    return (
        <ThemeContext.Provider value={{theme,setIsDark,isDark,ui}}>
            {props.children}
        </ThemeContext.Provider>
    );
}
 
export default ThemeContextProvider;