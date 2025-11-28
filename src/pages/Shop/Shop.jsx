import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Card from '../../components/Card/Card';
import CardGrid from '../../components/CardGrid/CardGrid';

const Shop = ({ products, addToCart, user, setPage }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleBuy = (product) => {
    if (!user) {
      alert("Por favor, faça login para comprar!");
      setPage('login');
      return;
    }
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-6 py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Essenciais para Pets</h2>
          <p className="text-gray-500">Suprimentos de qualidade para sua família peluda.</p>
        </div>
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Buscar brinquedos, ração..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-400 transition-all"
          />
          <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-20 text-gray-500">Carregando produtos...</div>
      ) : (
        <CardGrid>
          {filteredProducts.map(product => (
            <Card 
              key={product.id} 
              item={product} 
              type="shop" 
              actionLabel="Adicionar à Sacola" 
              onAction={handleBuy} 
            />
          ))}
        </CardGrid>
      )}
    </div>
  );
};

export default Shop;

