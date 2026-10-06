# Gestion des produits

Interface d'administration pour gérer un catalogue : produits et catégories.

## Contenu

- `src/pages/ProduitsPage.js` et `src/pages/CategoriesPage.js` : écrans principaux
- `src/components/` : formulaires et tableaux (ProduitsForm, ProduitsTable, CategoriesForm,
  CategoriesTable)
- `src/api/api.js` : appels à l'API
- `src/App.js` : navigation entre les écrans

## Stack

React 18, Redux Toolkit, React Router 7, axios, react-toastify, Tailwind CSS pour la mise en forme.

## Lancer le projet

```bash
npm install
npm start
```

## Remarque sur la structure

Ce dépôt mélange deux choses : l'application React décrite ci-dessus et un socle Laravel
(`app/`, `composer.json`, `vendor/`) qui n'est pas utilisé par l'interface. Un dépôt ne devrait
contenir qu'un projet à la fois, la séparation reste à faire.
