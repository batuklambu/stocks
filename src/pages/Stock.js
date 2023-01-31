import React from 'react';
// import { Link } from 'react-router-dom';
import { Link, useParams } from 'react-router-dom';
import stocks from '../data';

function StockInfo() {
  // function Stock({ name, symbol, lastPrice, high, low, open, change }) {
  const { symbol } = useParams();
  const stock = stocks.find((stock) => stock.symbol === symbol);
  const { name, lastPrice, change, high, low, open } = stock;

  return (
    <div className="stock-Info">
      <h2>Stock History</h2>
      {/* {stocks.map(() => { */}
      {/* return ( */}
      <div className="Stock-Info-titles">
        <p>Script : {name}</p>
        <p>Symbol : {symbol}</p>
        <p>Open : {open}</p>
        <p>Day High : {high}</p>
        <p>day Low: {low}</p>
        <p>Day Close : {lastPrice}</p>
        <p>Change :{change.toFixed(2)}</p>
        <Link to="/Stock">
          <button className="btn">Back to Stock</button>
        </Link>

        {/* <Link key={name} to={`/Stock/${name}`}>
              More Stock Details
            </Link> */}
        {/* <Link to={`/stocks/${stock.name}`}>Stock Information</Link> */}
      </div>
      {/* ); })} */}
    </div>
  );
}

// export default Stock;
export default StockInfo;
