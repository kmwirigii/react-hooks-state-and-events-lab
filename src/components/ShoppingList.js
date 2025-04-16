import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Step 1: Create a state variable for the selected filter category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Step 2: Filter the items based on the selected category
  const filteredItems = items.filter((item) =>
    selectedCategory === "All" || item.category === selectedCategory
  );

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Step 3: Update the state when the <select> value changes */}
        <select
          name="filter"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Step 4: Render only the filtered items */}
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;