import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Home = () => {
  return (
    <section>
      <h1>Willkommen bei Lunelle</h1>
      <p>Entdecke unsere handverlesene Auswahl an Schmuckstücken.</p>
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id}>
            <img src={product.imageUrl} alt={product.name} width={200} height={200} />
            <h2>{product.name}</h2>
            <p>{product.price.toFixed(2)} €</p>
            <Link to={`/products/${product.id}`}>Details ansehen</Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Home;
