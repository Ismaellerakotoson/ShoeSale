const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Crée un nouvel utilisateur avec ses informations
/**
 * @swagger
 * /addUser:
 *   post:
 *     summary: Créer un nouvel utilisateur
 *     tags: [Utilisateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - email
 *               - password
 *               - role
 *             properties:
 *               firstName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Champs manquants
 */

// Supprime un utilisateur existant par son identifiant
/**
 * @swagger
 * /deleteUser/{idUser}:
 *   delete:
 *     summary: Supprimer un utilisateur
 *     tags: [Utilisateur]
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Utilisateur supprimé
 *       400:
 *         description: ID manquant
 *       500:
 *         description: Erreur serveur
 */

router.post('/addUser', userController.createUser);
router.delete('/deleteUser/:idUser', userController.deleteUser);

module.exports = router;
