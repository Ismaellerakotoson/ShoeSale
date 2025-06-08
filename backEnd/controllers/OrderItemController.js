const orderItemModel = require('../models/OrderItemModel');

const addOrderItem = (req, res) => {
  const { idOrders, idProduct, quantity, price } = req.body;

  if (!idOrders || !idProduct || !quantity || !price) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }


  orderItemModel.addOrderItem(
    { idOrders, idProduct, quantity, price },
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de l’ajout du produit à la commande.' });
      }

      res.status(201).json({ message: 'Produit ajouté à la commande avec succès.', itemId: result.insertId });
    }
  );
};

module.exports = {
  addOrderItem,
};
