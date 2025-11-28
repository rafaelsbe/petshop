import React from 'react';
import { ShoppingBag, Menu, X, PawPrint, LogOut } from 'lucide-react';
import Button from '../Button/Button';

const Header = ({ page, setPage, cart, user, handleLogout, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
          <PawPrint className="text-orange-500" size={32} />
          <span className="text-2xl font-extrabold tracking-tight text-teal-800">Pet<span className="text-orange-500">Hub</span></span>
        </div>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <button onClick={() => setPage('home')} className={`hover:text-orange-500 transition-colors ${page === 'home' ? 'text-orange-500' : ''}`}>Início</button>
          <button onClick={() => setPage('adoption')} className={`hover:text-orange-500 transition-colors ${page === 'adoption' ? 'text-orange-500' : ''}`}>Adoção</button>
          <button onClick={() => setPage('shop')} className={`hover:text-orange-500 transition-colors ${page === 'shop' ? 'text-orange-500' : ''}`}>Loja</button>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setPage('cart')} className="relative p-2 text-gray-600 hover:text-orange-500 transition-colors">
            <ShoppingBag size={24} />
            {cart.length > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                {cart.length}
              </span>
            )}
          </button>
          
          {user ? (
            <div className="flex items-center gap-3">
               <span className="text-sm font-semibold text-teal-700 hidden lg:block">Olá, {user.email?.split('@')[0]}</span>
               <Button onClick={handleLogout} variant="ghost" className="px-2">
                 <LogOut size={20} />
               </Button>
            </div>
          ) : (
            <Button onClick={() => setPage('login')} variant="primary" className="rounded-full px-6">
              Entrar
            </Button>
          )}
        </div>

        <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 shadow-lg absolute w-full z-50">
           <button onClick={() => { setPage('home'); setIsMobileMenuOpen(false); }} className="text-left p-2 hover:bg-gray-50 rounded">Início</button>
           <button onClick={() => { setPage('adoption'); setIsMobileMenuOpen(false); }} className="text-left p-2 hover:bg-gray-50 rounded">Adoção</button>
           <button onClick={() => { setPage('shop'); setIsMobileMenuOpen(false); }} className="text-left p-2 hover:bg-gray-50 rounded">Loja</button>
           <button onClick={() => { setPage('cart'); setIsMobileMenuOpen(false); }} className="text-left p-2 hover:bg-gray-50 rounded flex justify-between">
              Sacola <span className="bg-orange-100 text-orange-600 px-2 rounded-full text-sm font-bold">{cart.length}</span>
           </button>
           <div className="border-t border-gray-100 my-2"></div>
           {user ? (
              <button onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }} className="text-left p-2 text-red-500 font-bold">Sair</button>
           ) : (
              <button onClick={() => { setPage('login'); setIsMobileMenuOpen(false); }} className="text-left p-2 text-teal-600 font-bold">Entrar</button>
           )}
        </div>
      )}
    </header>
  );
};

export default Header;

