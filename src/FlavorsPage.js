import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import FlavorCatalog from "./components/FlavorCatalog";
import OrderList from "./components/OrderList";

function FlavorsPage() {
  const [order, setOrder] = useState([]);

  const addToOrder = (flavor) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((item) => item.id === flavor.id);

      if (existingItem) {
        return prevOrder.map((item) =>
          item.id === flavor.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevOrder, { ...flavor, quantity: 1 }];
    });
  };

  const removeFromOrder = (id) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flavors-page">
      <Header />
      <div className="content">
        <FlavorCatalog addToOrder={addToOrder} />
        <OrderList order={order} removeFromOrder={removeFromOrder} setOrder={setOrder} />
      </div>
      <Footer />
    </div>
  );
}

export default FlavorsPage;