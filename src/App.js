import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProduitsPage from './pages/ProduitsPage';
import CategoriesPage from './pages/CategoriesPage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <nav className="bg-indigo-600 p-4 shadow-lg">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-white text-2xl font-semibold hover:text-indigo-300 transition duration-300">
              Gestion des Produits
            </Link>
            <div>
              <Link
                to="/"
                className="text-white hover:bg-indigo-700 px-4 py-2 rounded transition duration-300 mx-2"
              >
                Produits
              </Link>
              <Link
                to="/categories"
                className="text-white hover:bg-indigo-700 px-4 py-2 rounded transition duration-300 mx-2"
              >
                Catégories
              </Link>
            </div>
          </div>
        </nav>

        <div className="container mx-auto p-6 mt-6">
          <Routes>
            <Route path="/" element={<ProduitsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
