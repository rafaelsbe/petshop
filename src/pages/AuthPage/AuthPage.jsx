import React, { useState } from 'react';
import { User } from 'lucide-react';
import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../../firebase';
import Button from '../../components/Button/Button';

const AuthPage = ({ setUser, setPage }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      let userCredential;
      if (isLogin) {
        userCredential = await signInWithEmailAndPassword(auth, email, password);
      } else {
        userCredential = await createUserWithEmailAndPassword(auth, email, password);
      }
      setUser(userCredential.user);
      setPage('home');
    } catch (err) {
      console.error(err);
      setError(err.message.replace('Firebase: ', ''));
    }
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 animate-fade-in">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-orange-600">
            <User size={32} />
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{isLogin ? 'Bem-vindo de Volta' : 'Junte-se ao PetPals'}</h2>
          <p className="text-gray-500 mt-2">
            {isLogin ? 'Faça login para acessar sua conta' : 'Crie uma conta para começar a comprar'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button variant="primary" className="w-full py-3">
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </Button>
        </form>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-orange-600 font-bold hover:underline"
          >
            {isLogin ? 'Cadastrar' : 'Entrar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

