const db = require('../config/db');

// Ajoute un produit dans le panier d’un utilisateur
const addInCart = (user, callback) => {
  const { idUser, idProduct, quantity, price } = user;
  const sql = "INSERT INTO cart (idUser, idProduct, quantity, price) VALUES (?, ?, ?, ?)";
  
  try {
    db.query(sql, [idUser, idProduct, quantity, price], (err, result) => {
      if (err) {
        console.error("Erreur MySQL:", err);
        callback(err, null);
      } else {
        console.log("Produit ajouté dans le panier !");
        callback(null, result);
      }
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};

// Supprime un produit du panier selon l’id du panier (idCart)
const deleteInCart = (id , callback) =>{
  const idCart = id;
  const sql = "DELETE FROM cart WHERE idCart = ?"

  try{
    db.query(sql, [idCart] , (err, result)=>{
      if (err){
        console.error("Erreur MySQL :", err);
        callback(err, null)
      } else {
        console.log("Produit supprimé du panier avec succès !");
        callback(null, result);
      }
    })
  } catch (error){
    console.err("Erreur inattendue:", error);
    callback(error, null)
  }
}

// Supprime tous les produits du panier pour un utilisateur donné (idUser)
const deleteAllInCart = (id , callback) =>{
  const idUser = id;
  const sql = "DELETE FROM cart WHERE idUser = ?"

  try{
    db.query(sql, [idUser] , (err, result)=>{
      if (err){
        console.error("Erreur MySQL :", err);
        callback(err, null)
      } else {
        console.log("Tous supprimés du panier avec succès !");
        callback(null, result);
      }
    })
  } catch (error){
    console.err("Erreur inattendue:", error);
    callback(error, null)
  }
}

// Récupère le contenu du panier d’un utilisateur, avec détails des produits associés
const getUserCart = (id, callback) => {
  const sql = `
    SELECT 
      cart.idCart,
      cart.idUser,
      cart.quantity,
      cart.price AS cartPrice,
      product.idProduct,
      product.nameProduct,
      product.brand,
      product.image,
      product.price AS productPrice
    FROM cart
    JOIN product ON cart.idProduct = product.idProduct
    WHERE cart.idUser = ?
  `;

  db.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Erreur MySQL :", err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

// Récupère le nombre total d’articles dans le panier d’un utilisateur
const getCartCountByUser = (idUser, callback) => {
  const sql = `
    SELECT SUM(quantity) AS totalItems
    FROM cart
    WHERE idUser = ?
  `;

  db.query(sql, [idUser], (err, results) => {
    if (err) {
      console.error("Erreur MySQL :", err);
      return callback(err, null);
    }

    const totalItems = results[0]?.totalItems || 0;
    callback(null, totalItems);
  });
};


module.exports = {
  addInCart,
  deleteInCart,
  deleteAllInCart,
  getUserCart,
  getCartCountByUser
};
