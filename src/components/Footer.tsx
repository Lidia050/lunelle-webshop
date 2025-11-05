import { Link } from 'react-router-dom';

// Footer-Komponente mit den gewünschten Informationsseiten
export function Footer() {
  return (
    <footer>
      <nav>
        {/* Liste der rechtlichen und informativen Seiten */}
        <ul>
          <li>
            <Link to="/agb">AGB</Link>
          </li>
          <li>
            <Link to="/impressum">Impressum</Link>
          </li>
          <li>
            <Link to="/datenschutz">Datenschutz</Link>
          </li>
          <li>
            <Link to="/ueber-uns">Über uns</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
