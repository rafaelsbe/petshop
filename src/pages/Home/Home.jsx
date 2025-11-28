import React from 'react';
import { Heart, ShoppingBag, User } from 'lucide-react';
import Button from '../../components/Button/Button';
import Dog from '../../assets/dog-black.jpg'

const Home = ({ setPage }) => (
  <div className="animate-fade-in">
    <div className="relative bg-teal-700 text-white overflow-hidden rounded-b-3xl shadow-xl">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/paw-prints.png')]"></div>
      <div className="container mx-auto px-6 py-20 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Felicidade é um <br/>
            <span className="text-orange-400">Filhote Acolhido</span>
          </h1>
          <p className="text-xl mb-8 text-teal-100">Encontre seu novo melhor amigo ou obtenha os melhores brinquedos para aquele que você já tem.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button onClick={() => setPage('adoption')} variant="primary" className="text-lg px-8 py-3">
              Adotar um Pet
            </Button>
            <Button onClick={() => setPage('shop')} variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10 hover:text-white">
              Visitar Loja
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 rounded-full bg-orange-400 p-2 shadow-2xl animate-float">
             <div className="w-full h-full rounded-full bg-white overflow-hidden">
                <img src={Dog} alt="Happy Dog" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>
      </div>
    </div>

    <div className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Por que escolher PetHub?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6 rounded-xl hover:bg-orange-50 transition-colors">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Amor & Cuidado</h3>
          <p className="text-gray-600">Cada animal em nosso abrigo é tratado com muito amor e cuidado profissional.</p>
        </div>
        <div className="text-center p-6 rounded-xl hover:bg-teal-50 transition-colors">
          <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
            <ShoppingBag size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Produtos Premium</h3>
          <p className="text-gray-600">Estocamos apenas os alimentos, brinquedos e acessórios da mais alta qualidade para seus pets.</p>
        </div>
        <div className="text-center p-6 rounded-xl hover:bg-blue-50 transition-colors">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
            <User size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Conselhos de Especialistas</h3>
          <p className="text-gray-600">Nossa equipe é formada por treinadores certificados e assistentes veterinários prontos para ajudar.</p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;

