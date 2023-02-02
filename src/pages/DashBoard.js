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
        <tbody>
          {stocks.map((stock, index) => {
            const { name, lastPrice, change, symbol } = stock;
            return (
              <tr className="stock-details" key={index}>
                <td>
                  <Link to={`/Stock/${symbol}`}>{name}</Link>
                </td>
                <td className="price">{lastPrice}</td>
                <td className="change">{change.toFixed(4)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default DashBoard;
