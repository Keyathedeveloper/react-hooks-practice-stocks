import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStocks, sellStock }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map((stock) => (
        <Stock key={stock.id} stock={stock} sellStock={sellStock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
