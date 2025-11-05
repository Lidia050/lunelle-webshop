import { Link } from 'react-router-dom';

// Footer-Komponente mit rechtlichen Links
export function Footer() {
  return (
    <footer>
      {/* Hinweis auf das aktuelle Jahr */}
      <p>&copy; {new Date().getFullYear()} Lunelle Webshop</p>
      {/* Einfache Linkliste ohne Styling */}
      <nav>
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
