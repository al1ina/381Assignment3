import React from "react";
import flavors from "../data/flavors";
import FlavorItem from "./FlavorItem";

function FlavorCatalog({ addToOrder }) {
  return (
    <div>
      <h2>Ice Cream Flavors</h2>
      <div className="flavor-grid">
        {flavors.map((flavor) => (
          <FlavorItem
            key={flavor.id}
            flavor={flavor}
            addToOrder={addToOrder}
          />
        ))}
      </div>
    </div>
  );
}

export default FlavorCatalog;