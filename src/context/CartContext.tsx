import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type CartItem = {
  productId: string;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
};

const STORAGE_KEY = 'lunelle-cart';

const CartContext = createContext<CartContextValue | undefined>(undefined);

const readCartFromStorage = (): CartItem[] => {
  if (typeof window === 'undefined') {
    return [];
  }

  const stored = window.localStorage.getItem(STORAGE_KEY);

  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored) as CartItem[];
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch (error) {
    console.warn('Fehler beim Lesen des Warenkorbs aus dem localStorage.', error);
  }

  return [];
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItemsState] = useState<CartItem[]>(() => readCartFromStorage());

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const setItems = (nextItems: CartItem[]) => {
    setItemsState(nextItems);
  };

  return <CartContext.Provider value={{ items, setItems }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart muss innerhalb eines CartProvider verwendet werden.');
  }

  return context;
};
