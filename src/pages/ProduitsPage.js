import React, { useEffect, useState } from 'react';
import ProduitsTable from '../components/ProduitsTable';
import ProduitsForm from '../components/ProduitsForm';
import { fetchProduits, addProduit, deleteProduit } from '../api/api';
import { fetchCategories } from '../api/api';

const ProduitsPage = () => {
  const [produits, setProduits] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduit, setEditingProduit] = useState(null);

  useEffect(() => {
    fetchProduits().then((res) => setProduits(res.data));
    fetchCategories().then((res) => setCategories(res.data));
  }, []);

  const handleSave = (data) => {
    if (editingProduit) {
      // Mettre à jour un produit existant
      addProduit(data).then(() => window.location.reload());
    } else {
      // Ajouter un nouveau produit
      addProduit(data).then(() => window.location.reload());
    }
  };

  const handleDelete = (id) => {
    deleteProduit(id).then(() => window.location.reload());
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Gestion des Produits</h1>
      <ProduitsForm onSave={handleSave} categories={categories} editingProduit={editingProduit} />
      <ProduitsTable produits={produits} onDelete={handleDelete} onEdit={setEditingProduit} />
    </div>
  );
};

export default ProduitsPage;
