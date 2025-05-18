const userModel = require('../models/UserModel');

const createUser = (req, res) => {
  const { firstName, email, password, role } = req.body;

  if (!firstName || !email || !password || !role) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  userModel.createUser({ firstName, email, password, role }, (err, result) => {
    if (err) {
      console.error('Erreur SQL:', err);
      return res.status(500).json({ error: 'Erreur serveur.' });
    }

    res.status(201).json({ message: 'Utilisateur créé avec succès.', userId: result.insertId });
  });
};

const deleteUser = (req, res) => {
  const idUser = req.params.idUser;

  if (!idUser) {
    return res.status(400).json({ error: "ID de l'utilisateur manquant." });
  }

  userModel.deleteUser(idUser, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur." });
    }

    res.status(200).json({ message: "Utilisateur supprimé avec succès.", result });
  });
};


module.exports = {
  createUser,
  deleteUser
};
