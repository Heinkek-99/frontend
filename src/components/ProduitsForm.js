import React, { useState, useEffect } from 'react';

const ProduitsForm = ({ onSave, categories, editingProduit }) => {
  const [formData, setFormData] = useState({
    nom: '',
    description: '',
    prix: '',
    categorieId: '',
  });

  useEffect(() => {
    if (editingProduit) {
      setFormData({
        nom: editingProduit.nom,
        description: editingProduit.description,
        prix: editingProduit.prix,
        categorieId: editingProduit.categorie.id,
      });
    }
  }, [editingProduit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    setFormData({
      nom: '',
      description: '',
      prix: '',
      categorieId: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-xl mb-6 transition duration-300 transform hover:scale-105">
      <div className="space-y-4">
        <input
          type="text"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom du produit"
          className="border rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          className="border rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          name="prix"
          value={formData.prix}
          onChange={handleChange}
          placeholder="Prix"
          className="border rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <select
          name="categorieId"
          value={formData.categorieId}
          onChange={handleChange}
          className="border rounded-lg p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Sélectionner une catégorie</option>
          {categories.map((categorie) => (
            <option key={categorie.id} value={categorie.id}>
              {categorie.nom}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 w-full rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          {editingProduit ? 'Mettre à jour' : 'Ajouter'}
        </button>
      </div>
    </form>
  );
};

export default ProduitsForm;
