import React from "react";

function Stock({ stock, buyStock, sellStock, portfolioStocks }) {
  const isBought = portfolioStocks.some(
    (portfolioStock) => portfolioStock.id === stock.id
  );

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.price}</p>
        {isBought ? (
          <button
            className="btn btn-danger"
            onClick={() => sellStock(stock)}
          >
            Sell
          </button>
        ) : (
          <button className="btn btn-primary" onClick={() => buyStock(stock)}>
            Buy
          </button>
        )}
      </div>
    </div>
  );
}

export default Stock;
