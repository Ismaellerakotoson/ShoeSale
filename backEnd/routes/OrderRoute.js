const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

/**
 * @swagger
 * /addOrder:
 *   post:
 *     summary: Créer une nouvelle commande
 *     tags: [Order]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - idUser
 *               - subtotal
 *               - shipping_cost
 *               - tax
 *               - discount
 *               - total
 *               - status
 *             properties:
 *               idUser:
 *                 type: integer
 *               subtotal:
 *                 type: number
 *               shipping_cost:
 *                 type: number
 *               tax:
 *                 type: number
 *               discount:
 *                 type: number
 *               total:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Commande créée avec succès
 *       400:
 *         description: Champs manquants
 *       500:
 *         description: Erreur serveur
 */
router.post('/addOrder', orderController.addOrder);

module.exports = router;
