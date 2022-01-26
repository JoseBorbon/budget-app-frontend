import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/">Budget App</Link>
      </h1>
      <Link to="/transactions/new">
        <button>New Transaction</button>
      </Link>
    </nav>
  );
};

export default NavBar;
