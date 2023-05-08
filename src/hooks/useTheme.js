import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export const useTheme = () => {
    const context  = useContext(ThemeContext)

    if(context === undefined) {
        throw new Error ('useTheme() must be used inside the scope of contextProvider')
    }

    return context
}