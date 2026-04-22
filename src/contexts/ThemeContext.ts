import { createContext } from "react";

export type ThemeName = "light" | "dark";

interface ThemeContextType {
    theme: ThemeName;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    toggleTheme: () => { }
})

export { ThemeContext }