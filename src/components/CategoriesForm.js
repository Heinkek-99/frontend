import React, { useState, useEffect } from 'react';

const CategoriesForm = ({ initialData, onSave }) => {
  const [formData, setFormData] = useState({
    nom: '',
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="nom"
        value={formData.nom}
        onChange={handleChange}
        placeholder="Nom de la catégorie"
        className="border rounded w-full p-2"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Sauvegarder
      </button>
    </form>
  );
};

export default CategoriesForm; 
