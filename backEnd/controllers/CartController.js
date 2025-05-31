const cartModel = require('../models/CartModel');

const addInCart = (req, res) => {
  const { idUser, idProduct , quantity , price } = req.body;
  const image = req.file ? req.file.filename : null;

  if (!idUser || !idUser || !quantity || !price ) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  cartModel.addInCart(
    { idUser, idProduct, quantity, price },
    (err, result) => {
      if (err) {
        console.error('Erreur SQL:', err);
        return res.status(500).json({ error: 'Erreur serveur.' });
      }

      res.status(201).json({ message: 'Produit créé avec succès.',cartId: result.insertId });
    }
  );
};


const deleteInCart = (req, res) => {
  const idCart = req.params.idCart;

  if (!idCart) {
    return res.status(400).json({ error: "ID du produit manquant." });
  }

  cartModel.deleteInCart(idCart, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la suppression de produit." });
    }

    res.status(200).json({ message: "Produit dans la carte supprimé avec succès.", result });
  });
};

const getUserCart = (req, res) => {
  const idUser = req.params.idUser;
  cartModel.getUserCart(idUser,(err, products) => {
    if (err) {
      console.error('Erreur lors de la récupération des produits:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(200).json(products);
  });
};


module.exports = {
  addInCart,
  deleteInCart,
  getUserCart
};
