const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');


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


router.delete('/deleteToCart/:idCart', cartController.deleteInCart);

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
