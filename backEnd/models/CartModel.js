const db = require('../config/db');

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
  getUserCart,
  getCartCountByUser
};
