import { Link } from 'react-router-dom';

// Header-Komponente mit Navigation zu allen Seiten
export function Header() {
  return (
    <header>
      {/* Logo oder Projektname */}
      <h1>Lunelle Webshop</h1>
      {/* Einfache Navigation ohne Styling */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/lippenstifte">Lippenstifte</Link>
          </li>
          <li>
            <Link to="/lippenpflege">Lippenpflege</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/warenkorb">Warenkorb</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
