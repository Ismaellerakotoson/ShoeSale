const express = require('express');
const router = express.Router();
const orderItemController = require('../controllers/OrderItemController');

/**
 * @swagger
 * /addOrderItem:
 *   post:
 *     summary: Ajouter un produit à une commande
 *     tags: [OrderItems]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idOrders
 *               - idProduct
 *               - quantity
 *               - price
 *             properties:
 *               idOrders:
 *                 type: integer
 *                 example: 101
 *               idProduct:
 *                 type: integer
 *                 example: 42
 *               quantity:
 *                 type: integer
 *                 example: 2
 *               price:
 *                 type: number
 *                 example: 50.0
 *     responses:
 *       201:
 *         description: Produit ajouté à la commande avec succès
 *       400:
 *         description: Champs manquants
 *       500:
 *         description: Erreur interne du serveur
 */
router.post('/addOrderItem', orderItemController.addOrderItem);

module.exports = router;
