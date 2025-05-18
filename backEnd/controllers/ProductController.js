const productModel = require('../models/ProductModel');

const createProduct = (req, res) => {
  const { nameProduct, price, brand, description , features , quantity , image } = req.body;

  if (!nameProduct || !price || !brand || !description || !features || !quantity || !image) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  if (!Array.isArray(features)) {
    return res.status(400).json({ error: "'features' doit être une liste (tableau)." });
  }

  productModel.createProduct({ nameProduct, price, brand, description , features , quantity , image }, (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(201).json({ message: 'Produit créé avec succès.', productId: result.insertId });
  });
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


module.exports = {
  createProduct,
  deleteProduct
};
