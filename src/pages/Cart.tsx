import { useCart } from '../context/CartContext';

const Cart = () => {
  const { items } = useCart();

  return (
    <section>
      <h1>Warenkorb</h1>
      {items.length === 0 ? (
        <p>Dein Warenkorb ist derzeit leer. Lege Produkte in den Warenkorb, um hier fortzufahren.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.productId}>
              Produkt-ID: {item.productId} – Menge: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Cart;
