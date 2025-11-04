"use client";

import { useState } from "react";

export function ThemeButton() {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("isDarkMode") === "0" ? false : true
  );

  function toggleTheme() {
    const newValue = !isDarkMode;
    setIsDarkMode(newValue);
    localStorage.setItem("isDarkMode", newValue ? "1" : "0");
  }

  return (
    <button className="text-[32px] cursor-pointer" onClick={toggleTheme}>
      {isDarkMode ? "🌙" : "🌞"}
    </button>
  );
}
