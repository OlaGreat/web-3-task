import React from 'react';

const mockProducts = [
  { id: 1, name: 'T-shirt', price: 25, image: 'https://tse1.mm.bing.net/th?id=OIP.p0jP-XRHIeCm6zp2APyT8wHaJo&pid=Api' },
  { id: 2, name: 'Jeans', price: 50, image: 'https://tse4.mm.bing.net/th?id=OIP.0X_fqq1wNZ4ULRJg9s_NMQHaJ4&pid=Api' },
  { id: 3, name: 'Jacket', price: 80, image: 'https://tse2.mm.bing.net/th?id=OIP.5AhV3srk0pYM9SIBXOdCpAAAAA&pid=Api' },
  { id: 4, name: 'Shoes', price: 60, image: 'https://tse3.mm.bing.net/th/id/OIP.Y1ZCZNBuM6LyX9xNy3_jyAHaHa?pid=Api' },
  { id: 5, name: 'Hat', price: 20, image: 'https://tse3.mm.bing.net/th?id=OIP.D7YROjxw68GpDd0RKqPgIQHaHa&pid=Api' },
  { id: 6, name: 'Watch', price: 100, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80' },
  { id: 7, name: 'Socks', price: 10, image: 'https://tse1.mm.bing.net/th?id=OIP.EUHoahCmMLXnA5aNEBtKSwHaHa&pid=Api' },
  { id: 8, name: 'Sweater', price: 40, image: 'https://tse3.mm.bing.net/th?id=OIP.4AcPwnDhMQs6yZp0ZXlAiwHaLH&pid=Api' },
  { id: 9, name: 'Scarf', price: 15, image: 'https://tse3.mm.bing.net/th?id=OIP.-qMTrFPbiFdsd0ByMT6_EwHaHa&pid=Api' },
  { id: 10, name: 'Gloves', price: 30, image: 'https://tse1.mm.bing.net/th?id=OIP.PB4r6jI5mBCFZYXPq4QqugHaLH&pid=Api' },
];


const ProductList = ({ cart, setCart }) => {
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {mockProducts.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded shadow">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700 mb-2">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;