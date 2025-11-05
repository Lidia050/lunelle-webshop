import { Link } from 'react-router-dom';
import { products } from '../data/products';

const Products = () => {
  return (
    <section>
      <h1>Alle Produkte</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link> – {product.price.toFixed(2)} €
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Products;
