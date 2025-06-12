const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

// Ajoute un produit dans le panier d’un utilisateur
/**
 * @swagger
 * /addToCart:
 *   post:
 *     summary: Ajouter un produit dans la carte
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idUser
 *               - idProduct
 *               - quantity
 *               - price
 *             properties:
 *               idUser:
 *                 type: integer
 *               idProduct:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Utilisateur créé avec succès
 *       400:
 *         description: Champs manquants
 */
router.post('/addToCart', cartController.addInCart);

// Récupère le contenu du panier d’un utilisateur, avec détails des produits associés
/**
 * @swagger
 * /allCart/{idUser}:
 *   get:
 *     tags: [Cart]
 *     summary: Récupérer les cartes par ID utilisateurs
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID Utilisateur à Récupérer
 *     responses:
 *       200:
 *         description: Produit du panier récupérer avec succès.
 *       400:
 *         description: ID Utilisateur manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.get('/allCart/:idUser', cartController.getUserCart);

// Supprime un produit du panier selon l’id du panier (idCart)
/**
 * @swagger
 * /deleteInCart/{idCart}:
 *   delete:
 *     tags: [Cart]
 *     summary: Supprimer les produits du panier par ID carte
 *     parameters:
 *       - in: path
 *         name: idCart
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID carte à Récupérer
 *     responses:
 *       200:
 *         description: Produit du panier récupérer avec succès.
 *       400:
 *         description: ID panier manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.delete('/deleteInCart/:idCart', cartController.deleteInCart);

// Supprime tous les produits du panier pour un utilisateur donné (idUser)
/**
 * @swagger
 * /deleteAllInCart/{idUser}:
 *   delete:
 *     tags: [Cart]
 *     summary: Supprimer les produits du panier par ID utilisateur
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID utilisateur à Récupérer
 *     responses:
 *       200:
 *         description: Produits du panier récupérer avec succès.
 *       400:
 *         description: ID utilisateur manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.delete('/deleteAllInCart/:idUser', cartController.deleteAllInCart);

// Récupère le nombre total d’articles dans le panier d’un utilisateur
/**
 * @swagger
 * /cartCount/{idUser}:
 *   get:
 *     tags: [Cart]
 *     summary: Obtenir le nombre total de produits dans le panier par utilisateur
 *     parameters:
 *       - in: path
 *         name: idUser
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID de l'utilisateur
 *     responses:
 *       200:
 *         description: Nombre total de produits récupéré avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalItems:
 *                   type: integer
 *       400:
 *         description: ID utilisateur manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.get('/cartCount/:idUser', cartController.getCartCountByUser);

module.exports = router;