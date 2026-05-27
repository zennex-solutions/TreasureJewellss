let products = [
  {
    id: 1,
    name: "Diamond Necklace",
    price: 4999,
    category: "Necklace",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    description: "Elegant diamond necklace",
  },
];

export const getProducts = () => products;

export const getProductById = (id) =>
  products.find((p) => p.id === Number(id));

export const addProduct = (product) => {
  const newProduct = { ...product, id: Date.now() };
  products.push(newProduct);
};

export const updateProduct = (id, updatedData) => {
  products = products.map((p) =>
    p.id === Number(id) ? { ...p, ...updatedData } : p
  );
};

export const deleteProduct = (id) => {
  products = products.filter((p) => p.id !== Number(id));
};