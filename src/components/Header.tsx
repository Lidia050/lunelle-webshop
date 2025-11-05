import { Link } from 'react-router-dom';

// Header-Komponente mit Logo links und Navigation rechts
export function Header() {
  return (
    <header>
      <div>
        {/* Logo oder Projektname; Link führt zur Startseite */}
        <Link to="/">Lunelle</Link>
      </div>
      <nav>
        {/* Navigation zu den wichtigsten Shop-Seiten */}
        <ul>
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
