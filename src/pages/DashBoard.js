import { Link } from 'react-router-dom';
import stocks from '../data';
function DashBoard() {
  return (
    <div className="dashboard">
      <h2>Most Active stock</h2>
      <table className="stock-title">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        {stocks.map((stock) => {
          const { name, lastPrice, change, symbol } = stock;
          return (
            <tr className="stock-details">
              <Link key={name} to={`/Stock/${symbol}`}>
                <td>{name}</td>
              </Link>
              <td className="price">{lastPrice}</td>
              <td className="change">{change.toFixed(4)}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default DashBoard;
