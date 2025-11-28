import React from 'react';
import { ShoppingBag, Trash2 } from 'lucide-react';
import Button from '../../components/Button/Button';

const Cart = ({ cart, removeFromCart, total }) => (
  <div className="container mx-auto px-6 py-10 max-w-4xl animate-fade-in">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Sua Sacola de Compras</h2>
    
    {cart.length === 0 ? (
      <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
        <ShoppingBag size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500 text-lg">Sua sacola está vazia.</p>
      </div>
    ) : (
      <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 space-y-4">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
              <div className="flex-grow">
                <h4 className="font-bold text-gray-800">{item.name}</h4>
                <p className="text-orange-500 font-semibold">R$ {item.price}</p>
              </div>
              <button 
                onClick={() => removeFromCart(index)}
                className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xl font-bold text-gray-800">
            Total: <span className="text-orange-600">R$ {total.toFixed(2)}</span>
          </div>
          <Button variant="primary" className="w-full sm:w-auto px-8">Finalizar Compra</Button>
        </div>
      </div>
    )}
  </div>
);

export default Cart;

