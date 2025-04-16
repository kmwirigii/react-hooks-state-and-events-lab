import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // State for toggling between dark and light mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dynamically set class name based on state
  const appClassName = isDarkMode ? "App dark" : "App light";

  // Toggle dark mode state
  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <div className={appClassName}>
      <header>
        <h2>Shopster</h2>
        {/* Button to toggle theme mode */}
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;