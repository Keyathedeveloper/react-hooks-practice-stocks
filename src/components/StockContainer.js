import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/stocks") // replace with your API URL
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default StockContainer;
