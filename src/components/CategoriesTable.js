import React from 'react';

const CategoriesTable = ({ categories, onEdit, onDelete }) => (
  <table className="min-w-full bg-white border border-gray-200">
    <thead>
      <tr>
        <th className="py-2 px-4 border">Nom</th>
        <th className="py-2 px-4 border">Actions</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((categorie) => (
        <tr key={categorie.id}>
          <td className="py-2 px-4 border">{categorie.nom}</td>
          <td className="py-2 px-4 border">
            <button
              onClick={() => onEdit(categorie)}
              className="bg-blue-500 text-white px-2 py-1 mr-2 rounded"
            >
              Modifier
            </button>
            <button
              onClick={() => onDelete(categorie.id)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Supprimer
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CategoriesTable;
