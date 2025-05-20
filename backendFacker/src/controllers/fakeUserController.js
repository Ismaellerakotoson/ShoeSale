const { faker } = require('@faker-js/faker');
const db = require('../config/db');

// Générer et insérer un utilisateur Faker
exports.createFakeUser = (req, res) => {
  const user = {
    firstName: faker.person.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(['user', 'admin', 'guest']),
  };

  const query = 'INSERT INTO user (firstName, email, password, role) VALUES (?, ?, ?, ?)';
  const values = [user.firstName, user.email, user.password, user.role];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json({ message: 'Utilisateur ajouté', id: result.insertId, user });
  });
};

// Afficher tous les utilisateurs
exports.getAllUsers = (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    res.json(results);
  });
};
