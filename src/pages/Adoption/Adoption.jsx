import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import CardGrid from '../../components/CardGrid/CardGrid';

const Adoption = ({ animals, addToCart, user, setPage }) => {
  const [speciesFilter, setSpeciesFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');

  // Função helper para normalizar valores de gênero
  const normalizeGender = (gender) => {
    if (!gender) return '';
    const normalized = gender.toLowerCase().trim();
    
    if (normalized === 'male' || normalized === 'macho' || normalized === 'm') return 'male';
    if (normalized === 'female' || normalized === 'fêmea' || normalized === 'femea' || normalized === 'f') return 'female';
    return normalized;
  };

  const filteredAnimals = animals.filter(animal => {

    const speciesMatch = speciesFilter === 'all' || animal.species === speciesFilter;
    const genderMatch = genderFilter === 'all' || 
      normalizeGender(animal.gender) === normalizeGender(genderFilter);

    let ageMatch = true;
    if (ageFilter === 'baby') {
      ageMatch = animal.age < 2;
    } else if (ageFilter === 'young') {
      ageMatch = animal.age >= 2 && animal.age <= 5;
    } else if (ageFilter === 'senior') {
      ageMatch = animal.age > 5;
    }

    return speciesMatch && genderMatch && ageMatch;
  });

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
        <div className="flex flex-wrap gap-4 mt-4 md:mt-0 bg-gray-50 p-4 rounded-xl border border-gray-100">
          
          <select 
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">Todas as Espécies</option>
            <option value="dog">Cães</option>
            <option value="cat">Gatos</option>
          </select>

          <select 
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">Qualquer Gênero</option>
            <option value="male">Macho</option>
            <option value="female">Fêmea</option>
          </select>

          <select 
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="all">Qualquer Idade</option>
            <option value="baby">Filhote (0-1 ano)</option>
            <option value="young">Jovem (2-5 anos)</option>
            <option value="senior">Idoso (5+ anos)</option>
          </select>
        </div>
      </div>
      
      {animals.length === 0 ? (
        <div className="text-center py-20 text-gray-500">Carregando animais ou nenhum animal disponível...</div>
      ) : filteredAnimals.length === 0 ? (
         <div className="text-center py-20 bg-gray-50 rounded-lg">
            <p className="text-xl text-gray-600 font-bold">Nenhum pet corresponde a estes filtros.</p>
            <button 
                onClick={() => {setSpeciesFilter('all'); setGenderFilter('all'); setAgeFilter('all');}}
                className="mt-4 text-orange-500 underline hover:text-orange-600 transition-colors">
                Limpar todos os filtros
            </button>
         </div>
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

