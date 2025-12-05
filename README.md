# PetHub 🐾

PetHub é uma aplicação web moderna de petshop desenvolvida em React, oferecendo funcionalidades de adoção de animais e uma loja virtual de produtos para pets.

## 📋 Sobre o Projeto

O PetHub permite que usuários:
- **Adotem animais**: Navegue por uma lista de animais disponíveis para adoção (cães e gatos)
- **Comprem produtos**: Explore e adicione produtos para pets ao carrinho de compras
- **Gerenciem conta**: Sistema de autenticação para login e registro de usuários
- **Carrinho de compras**: Adicione produtos ao carrinho e visualize o total

## 🚀 Tecnologias Utilizadas

- **React 19.2.0** - Biblioteca JavaScript para construção de interfaces
- **Firebase 12.6.0** - Backend como serviço (BaaS)
  - Firebase Authentication - Autenticação de usuários
  - Cloud Firestore - Banco de dados NoSQL em tempo real
- **Tailwind CSS 3.4.18** - Framework CSS utilitário para estilização
- **Lucide React** - Biblioteca de ícones moderna e leve
- **React Scripts 5.0.1** - Ferramentas de build do Create React App
- **PostCSS & Autoprefixer** - Processamento de CSS

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd petshop
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Copie o arquivo `.env.example` para `.env`
   - Preencha as credenciais do Firebase no arquivo `.env`

4. Inicie o servidor de desenvolvimento:
```bash
npm start
```

A aplicação estará disponível em [http://localhost:3000](http://localhost:3000)

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm test` - Executa os testes
- `npm run build` - Cria uma build de produção
- `npm run eject` - Ejeta a configuração do Create React App (irreversível)

## 🔐 Configuração do Firebase

O projeto utiliza Firebase para autenticação e banco de dados. Certifique-se de:

1. Criar um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Habilitar Authentication (Email/Password)
3. Criar um banco de dados Firestore
4. Configurar as regras de segurança do Firestore
5. Adicionar as credenciais no arquivo `.env`

## 📁 Estrutura do Projeto

```
petshop/
├── public/          # Arquivos estáticos
├── src/
│   ├── components/  # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── CardGrid/
│   │   ├── Footer/
│   │   └── Header/
│   ├── pages/       # Páginas da aplicação
│   │   ├── Adoption/
│   │   ├── AuthPage/
│   │   ├── Cart/
│   │   ├── Home/
│   │   └── Shop/
│   ├── assets/      # Imagens e recursos
│   ├── firebase.js  # Configuração do Firebase
│   ├── App.jsx      # Componente principal
│   └── index.js     # Ponto de entrada
├── .env             # Variáveis de ambiente (não versionado)
├── .env.example     # Template de variáveis de ambiente
├── tailwind.config.js
└── package.json
```

## 🎨 Funcionalidades

- ✅ Sistema de autenticação (Login/Registro)
- ✅ Listagem de animais para adoção
- ✅ Loja de produtos para pets
- ✅ Carrinho de compras
- ✅ Interface responsiva
- ✅ Busca de produtos
- ✅ Design moderno com Tailwind CSS

## 📝 Licença

Este projeto é privado.

## 👨‍💻 Desenvolvido com

Criado usando [Create React App](https://github.com/facebook/create-react-app)
