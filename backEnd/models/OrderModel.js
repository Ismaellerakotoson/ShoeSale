const db = require('../config/db');

// Ajoute une nouvelle commande pour un utilisateur
const addOrder = (orderData, callback) => {
  const { idUser, subtotal, shipping_cost, tax, discount, total, statu, created_at } = orderData;

  const sql = `
    INSERT INTO orders 
    (idUser, subtotal, shipping_cost, tax, discount, total, statu, created_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  try {
    db.query(sql, [idUser, subtotal, shipping_cost, tax, discount, total, statu, created_at], (err, result) => {
      if (err) {
        console.error("Erreur MySQL:", err);
        callback(err, null);
      } else {
        console.log("Commande ajoutée avec succès !");
        callback(null, result);
      }
    });
  } catch (error) {
    console.error("Erreur inattendue:", error);
    callback(error, null);
  }
};

module.exports = {
  addOrder
};
