import React, { useEffect } from "react";
import OrderItem from "./OrderItem";

function OrderList({ order, removeFromOrder, setOrder }) {
  useEffect(() => {
    const savedOrder = localStorage.getItem("sweetScoopOrder");
    if (savedOrder) {
      setOrder(JSON.parse(savedOrder));
    }
  }, [setOrder]);

  useEffect(() => {
    localStorage.setItem("sweetScoopOrder", JSON.stringify(order));
  }, [order]);

  const total = order.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        order.map((item) => (
          <OrderItem
            key={item.id}
            item={item}
            removeFromOrder={removeFromOrder}
          />
        ))
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default OrderList;