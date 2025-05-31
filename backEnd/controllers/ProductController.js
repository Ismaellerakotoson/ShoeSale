const productModel = require('../models/ProductModel');

const createProduct = (req, res) => {
  const { nameProduct, price, brand, description, features, quantity } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!nameProduct || !price || !brand || !description || !features || !quantity || !image) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  if (!Array.isArray(features)) {
    return res.status(400).json({ error: "'features' doit être un tableau." });
  }

  productModel.createProduct(
    { nameProduct, price, brand, description, features, quantity, image },
    (err, result) => {
      if (err) {
        console.error('Erreur SQL:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
      }

      res.status(201).json({ message: 'Produit créé avec succès.', productId: result.insertId });
    }
  );
};


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

const getAllProducts = (req, res) => {
  productModel.getAllProducts((err, products) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(200).json(products);
  });
};

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
