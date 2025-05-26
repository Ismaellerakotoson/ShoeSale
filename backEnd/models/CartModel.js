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

module.exports = {
  addInCart,
  deleteInCart
};
