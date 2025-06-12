const db = require('../config/db');

// Crée un nouveau produit avec ses détails et son image
const createProduct = (product, callback) => {
  const { nameProduct, price, brand, description, features, quantity, image } = product;
  const jsonFeatures = JSON.stringify(features);

  const sql = "INSERT INTO product (nameProduct, price, brand, description, features, quantity, image) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    db.query(sql, [nameProduct, price, brand, description, jsonFeatures, quantity, image], (err, result) => {
      if (err) {
        console.error("Erreur MySQL:", err);
        return callback(err, null);
      }
      console.log("Produit ajouté avec succès !");
      callback(null, result);
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};

// Supprime un produit existant par son identifiant
const deleteProduct = (id, callback) => {
  const sql = "DELETE FROM product WHERE idProduct = ?";

  try {
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Erreur MySQL :", err);
        return callback(err, null);
      }
      console.log("Produit supprimé avec succès !");
      callback(null, result);
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};

// Récupère la liste de tous les produits disponibles
const getAllProducts = (callback) => {
  const sql = 'SELECT * FROM product';
  db.query(sql, (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

// Récupère les détails d’un produit spécifique par son identifiant
const getOneProduct = (id,callback) => {
  const sql = 'SELECT * FROM product WHERE idProduct= ?';
  db.query(sql, [id], (err, results) => {
    if (err) console.error("Erreur MySQL :", err);
    callback(null, results);
  });
};

module.exports = {
  createProduct,
  deleteProduct,
  getAllProducts,
  getOneProduct
};
