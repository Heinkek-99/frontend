import React from 'react';

const ProduitsTable = ({ produits, onDelete, onEdit }) => {
  return (
    <table className="min-w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <thead className="bg-indigo-600 text-white">
        <tr>
          <th className="px-4 py-2">Nom</th>
          <th className="px-4 py-2">Description</th>
          <th className="px-4 py-2">Prix</th>
          <th className="px-4 py-2">Catégorie</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((produit) => (
          <tr key={produit.id} className="border-b hover:bg-indigo-50">
            <td className="px-4 py-2">{produit.nom}</td>
            <td className="px-4 py-2">{produit.description}</td>
            <td className="px-4 py-2">{produit.prix} €</td>
            <td className="px-4 py-2">{produit.categorie.nom}</td>
            <td className="px-4 py-2 flex justify-between">
              <button
                onClick={() => onEdit(produit)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
              >
                Modifier
              </button>
              <button
                onClick={() => onDelete(produit.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
              >
                Supprimer
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProduitsTable;
