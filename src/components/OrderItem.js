import React from "react";

function OrderItem({ item, removeFromOrder }) {
  return (
    <div>
      <h4>{item.name}</h4>
      <p>Quantity: {item.quantity}</p>
      <p>Price: ${(parseFloat(item.price.replace("$", "")) * item.quantity).toFixed(2)}</p>
      <button className="remove" onClick={() => removeFromOrder(item.id)}>
        Remove Item
      </button>
    </div>
  );
}

export default OrderItem;