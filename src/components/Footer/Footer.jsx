import React from 'react';
import { PawPrint, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = ({ setPage }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
             <div className="flex items-center gap-2 mb-4">
              <PawPrint className="text-orange-500" size={24} />
              <span className="text-xl font-bold">PetPals</span>
            </div>
            <p className="text-gray-400 text-sm">Fazendo rabos abanarem e corações ronronarem desde 2023. Sua loja completa para tudo que seu pet precisa.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('home')}>Início</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('adoption')}>Adoção</li>
              <li className="hover:text-white cursor-pointer" onClick={() => setPage('shop')}>Loja</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-400">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={16} /> 123 Puppy Lane, Dogville</li>
              <li className="flex items-center gap-2"><Phone size={16} /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail size={16} /> hello@petpals.com</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-orange-400">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors"><Twitter size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; 2023 PetPals Inc. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

