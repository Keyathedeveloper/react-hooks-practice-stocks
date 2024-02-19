import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data));
  }, []);

  function buyStock(stock) {
    setPortfolioStocks([...portfolioStocks, stock]);
  }

  function sellStock(stock) {
    setPortfolioStocks(portfolioStocks.filter((s) => s.id !== stock.id));
  }

  return (
    <div>
      <Header />
      <MainContainer>
        <StockContainer stocks={stocks} buyStock={buyStock} />
        <PortfolioContainer portfolioStocks={portfolioStocks} sellStock={sellStock} />
      </MainContainer>
    </div>
  );
}

export default App;
