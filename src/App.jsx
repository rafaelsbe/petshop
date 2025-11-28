import React, { useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from './firebase';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Adoption from './pages/Adoption/Adoption';
import Shop from './pages/Shop/Shop';
import Cart from './pages/Cart/Cart';
import AuthPage from './pages/AuthPage/AuthPage';

export default function App() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animals, setAnimals] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {

    const unsubAnimals = onSnapshot(
        collection(db, 'animals'),
        (snapshot) => {
            const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setAnimals(data);
        },
        (error) => console.log("Animal fetch error (likely empty DB):", error)
    );

    const unsubProducts = onSnapshot(
        collection(db, 'products'),
        (snapshot) => {
            const data = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setProducts(data);
        },
        (error) => console.log("Product fetch error:", error)
    );

    return () => {
        unsubAnimals();
        unsubProducts();
    };
  }, [user]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const cartTotal = useMemo(() => cart.reduce((acc, item) => acc + parseFloat(item.price), 0), [cart]);

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    setPage('home');
    setCart([]);
  };

  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen flex flex-col">
      <Header 
        page={page}
        setPage={setPage}
        cart={cart}
        user={user}
        handleLogout={handleLogout}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <main className="flex-grow bg-white">
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'adoption' && <Adoption animals={animals} addToCart={addToCart} user={user} setPage={setPage} />}
        {page === 'shop' && <Shop products={products} addToCart={addToCart} user={user} setPage={setPage} />}
        {page === 'cart' && <Cart cart={cart} removeFromCart={removeFromCart} total={cartTotal} />}
        {page === 'login' && <AuthPage setUser={setUser} setPage={setPage} />}
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
