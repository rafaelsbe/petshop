import React from 'react';
import Button from '../Button/Button';

const Card = ({ item, type, onAction, actionLabel }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100 flex flex-col h-full">
      <div className="h-48 bg-gray-100 relative overflow-hidden group">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          onError={(e) => e.target.src = "https://placehold.co/400x300?text=Sem+Imagem"}
        />
        {type === 'adoption' && (
          <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-teal-700 shadow-sm">
            {item.species === 'dog' ? '🐕 Cão' : '🐈 Gato'}
          </div>
        )}
        {type === 'shop' && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-sm">
            R$ {item.price}
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-3 flex-grow line-clamp-2">{item.description}</p>
        
        {type === 'adoption' && (
          <div className="flex gap-2 mb-3 text-xs text-gray-500">
            <span className="bg-teal-50 px-2 py-1 rounded">{item.age} anos</span>
            <span className="bg-teal-50 px-2 py-1 rounded">{item.gender}</span>
          </div>
        )}

        <Button 
          onClick={() => onAction(item)} 
          variant={type === 'adoption' ? 'secondary' : 'primary'}
          className="w-full mt-auto"
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

export default Card;

