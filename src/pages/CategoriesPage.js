import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCategoriesAsync,
  addCategorieAsync,
  deleteCategorieAsync,
} from '../store/categoriesSlice';
import CategoriesTable from '../components/CategoriesTable';
import CategoriesForm from '../components/CategoriesForm';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { list: categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const handleAdd = (newCategorie) => {
    dispatch(addCategorieAsync(newCategorie));
  };

  const handleDelete = (id) => {
    dispatch(deleteCategorieAsync(id));
  };

  if (loading) return <p>Chargement des catégories...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h1>Catégories</h1>
      <CategoriesForm onSave={handleAdd} />
      <CategoriesTable categories={categories} onDelete={handleDelete} />
    </div>
  );
};

export default CategoriesPage;
