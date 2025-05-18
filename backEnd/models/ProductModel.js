const db = require('../config/db');

const createProduct = (product, callback) => {
  const { nameProduct, price, brand, description, features, quantity, image } = product;
  const jsonFeatures = JSON.stringify(features);

  const sql = "INSERT INTO product (nameProduct, price, brand, description, features, quantity, image) VALUES (?, ?, ?, ?, ?, ?, ?)";

  try {
    db.query(sql, [nameProduct, price, brand, description, jsonFeatures, quantity, image], (err, result) => {
      if (err) {
        console.error("Erreur MySQL:", err);
        callback(err, null);
      } else {
        console.log("Produit ajouté avec succès !");
        callback(null, result);
      }
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};


const deleteProduct = (id , callback) =>{
  const idProduct = id;
  const sql = "DELETE FROM product WHERE idProduct = ?"

  try{
    db.query(sql, [idProduct] , (err, result)=>{
      if (err){
        console.error("Erreur MySQL :", err);
        callback(err, null)
      } else {
        console.log("Produit supprimé avec succès !");
        callback(null, result);
      }
    })
  } catch (error){
    console.err("Erreur inattendue:", error);
    callback(error, null)
  }
}

module.exports = {
  createProduct,
  deleteProduct
};
