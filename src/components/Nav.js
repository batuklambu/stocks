import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className="nav">
      <Link to="/">
        <div>iStocks</div>
      </Link>
      <Link to="/stock">
        <div>Stocks</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>
  );
}

export default Nav;
