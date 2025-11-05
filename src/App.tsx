import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Lippenstifte from './pages/Lippenstifte';
import Lippenpflege from './pages/Lippenpflege';
import Login from './pages/Login';
import Warenkorb from './pages/Warenkorb';
import AGB from './pages/AGB';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import UeberUns from './pages/UeberUns';

// Zentrale App-Komponente, die den Router und das Layout definiert
function App() {
  return (
    <div>
      {/* Header und Navigation */}
      <Header />
      {/* Hauptbereich für die jeweiligen Seiten */}
      <main>
        <Routes>
          {/* Startseite */}
          <Route path="/" element={<Home />} />
          {/* Produktseiten */}
          <Route path="/lippenstifte" element={<Lippenstifte />} />
          <Route path="/lippenpflege" element={<Lippenpflege />} />
          {/* Weitere Seiten */}
          <Route path="/login" element={<Login />} />
          <Route path="/warenkorb" element={<Warenkorb />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
        </Routes>
      </main>
      {/* Footer mit rechtlichen Links */}
      <Footer />
    </div>
  );
}

export default App;
