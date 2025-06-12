const db = require('../config/db');

// Ajoute un produit à une commande existante
const addOrderItem = (item, callback) => {
  const { idOrders, idProduct, quantity, price, total_price } = item;

  const sql = `
    INSERT INTO order_items (idOrders, idProduct, quantity, price)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [idOrders, idProduct, quantity, price, total_price], (err, result) => {
    if (err) {
      console.error('Erreur MySQL:', err);
      return callback(err, null);
    }

    console.log('Produit ajouté à la commande.');
    callback(null, result);
  });
};

module.exports = {
  addOrderItem,
};
