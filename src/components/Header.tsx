import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">Lunelle Webshop</Link>
      </div>
      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/products">Produkte</NavLink>
        <NavLink to="/cart">Warenkorb</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};
