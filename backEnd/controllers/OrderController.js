const orderModel = require('../models/OrderModel');

const addOrder = (req, res) => {
  const { idUser, subtotal, shipping_cost, tax, discount, total, statu } = req.body;
  const created_at = new Date();

  if (!idUser || subtotal == null || shipping_cost == null || tax == null || discount == null || total == null || !statu) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  orderModel.addOrder(
    { idUser, subtotal, shipping_cost, tax, discount, total, statu, created_at },
    (err, result) => {
      if (err) {
        console.error('Erreur SQL:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
      }

      res.status(201).json({ message: 'Commande créée avec succès.', orderId: result.insertId });
    }
  );
};


module.exports = {
  addOrder
};
