import { useParams } from 'react-router-dom';
import { products } from '../data/products';

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <section>
        <h1>Produkt nicht gefunden</h1>
        <p>Bitte wähle ein Produkt aus der Liste.</p>
      </section>
    );
  }

  return (
    <section>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} width={300} height={300} />
      <p>{product.description}</p>
      <p>Preis: {product.price.toFixed(2)} €</p>
    </section>
  );
};

export default ProductDetail;
