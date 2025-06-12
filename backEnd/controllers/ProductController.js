const productModel = require('../models/ProductModel');

// Crée un nouveau produit avec ses détails et son image
const createProduct = (req, res) => {
  const { nameProduct, price, brand, description, quantity } = req.body;
  const image = req.file ? req.file.filename : null;
  let features = req.body.features;

  // Si un seul feature est envoyé, c’est une string ; s’il y en a plusieurs, c’est un tableau
  if (typeof features === 'string') {
    features = [features];
  }

  if (!nameProduct || !price || !brand || !description || !features || !quantity || !image) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const featuresString = JSON.stringify(features);

  productModel.createProduct(
    { nameProduct, price, brand, description, features: featuresString, quantity, image },
    (err, result) => {
      if (err) {
        console.error('Erreur SQL:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
      }
      res.status(201).json({ message: 'Produit créé avec succès.', productId: result.insertId });
    }
  );
};

// Supprime un produit existant par son identifiant
const deleteProduct = (req, res) => {
  const idProduct = req.params.idProduct;

  if (!idProduct) {
    return res.status(400).json({ error: "ID du produit manquant." });
  }

  productModel.deleteProduct(idProduct, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la suppression de produit." });
    }

    res.status(200).json({ message: "Produit supprimé avec succès.", result });
  });
};

// Récupère la liste de tous les produits disponibles
const getAllProducts = (req, res) => {
  productModel.getAllProducts((err, products) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(200).json(products);
  });
};

// Récupère les détails d’un produit spécifique par son identifiant
const getOneProduct = (req, res) => {
  const idProduct = req.params.idProduct;

  if (!idProduct) {
    return res.status(400).json({ error: "ID du produit manquant." });
  }

  productModel.getOneProduct(idProduct, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la récupération du produit." });
    }

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "Produit introuvable." });
    }

    res.status(200).json({ message: "Produit récupéré avec succès.", product: result[0] });
  });
};


module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct
};
