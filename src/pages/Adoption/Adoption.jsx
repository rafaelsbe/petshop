import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import CardGrid from '../../components/CardGrid/CardGrid';

const Adoption = ({ animals, addToCart, user, setPage }) => {
  const [filter, setFilter] = useState('all');

  const filteredAnimals = animals.filter(a => filter === 'all' || a.species === filter);

  const handleAdopt = (animal) => {
    if (!user) {
      alert("Por favor, faça login para adotar um pet!");
      setPage('login');
      return;
    }
    alert(`Processo de adoção iniciado para ${animal.name}! Entraremos em contato em breve.`);
  };

  return (
    <div className="container mx-auto px-6 py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Encontre Seu Amigo</h2>
          <p className="text-gray-500">Dê um lar amoroso para um pet que precisa.</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 bg-gray-100 p-1 rounded-lg">
          {['all', 'dog', 'cat'].map(type => {
            const labels = { all: 'Todos', dog: 'Cães', cat: 'Gatos' };
            return (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-4 py-2 rounded-md capitalize font-medium transition-all ${filter === type ? 'bg-white text-teal-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
              >
                {labels[type]}
              </button>
            );
          })}
        </div>
      </div>
      
      {animals.length === 0 ? (
        <div className="text-center py-20 text-gray-500">Carregando animais ou nenhum animal disponível...</div>
      ) : (
        <CardGrid>
          {filteredAnimals.map(animal => (
            <Card 
              key={animal.id} 
              item={animal} 
              type="adoption" 
              actionLabel="Me Adote" 
              onAction={handleAdopt} 
            />
          ))}
        </CardGrid>
      )}
    </div>
  );
};

export default Adoption;

