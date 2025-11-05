export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
};

export const products: Product[] = [
  {
    id: 'luna-earrings',
    name: 'Lunelle Ohrringe',
    price: 59.9,
    imageUrl: 'https://via.placeholder.com/300x300?text=Lunelle+Ohrringe',
    description: 'Handgefertigte Ohrringe mit schimmernden Details.',
  },
  {
    id: 'stella-necklace',
    name: 'Stella Halskette',
    price: 89.5,
    imageUrl: 'https://via.placeholder.com/300x300?text=Stella+Halskette',
    description: 'Elegante Halskette mit zeitlosem Design.',
  },
  {
    id: 'noir-bracelet',
    name: 'Noir Armband',
    price: 39.0,
    imageUrl: 'https://via.placeholder.com/300x300?text=Noir+Armband',
    description: 'Minimalistisches Armband für jeden Anlass.',
  },
];
