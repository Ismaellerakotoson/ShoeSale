const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const upload = require("../middlewares/upload")

/**
 * @swagger
 * /addProduct:
 *   post:
 *     summary: Ajouter un nouveau produit
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - nameProduct
 *               - price
 *               - brand
 *               - description
 *               - features
 *               - quantity
 *               - image
 *             properties:
 *               nameProduct:
 *                 type: string
 *               price:
 *                 type: number
 *               brand:
 *                 type: string
 *               description:
 *                 type: string
 *               features:
 *                 type: array
 *                 items:
 *                   type: string
 *               quantity:
 *                 type: integer
 *               image:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Produit créé avec succès.
 *       400:
 *         description: Champs requis manquants ou mal formés.
 *       500:
 *         description: Erreur serveur.
 */
router.post('/addProduct', upload.single('image'), productController.createProduct);


/**
 * @swagger
 * /deleteProduct/{idProduct}:
 *   delete:
 *     summary: Supprimer un produit par ID
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit à supprimer
 *     responses:
 *       200:
 *         description: Produit supprimé avec succès.
 *       400:
 *         description: ID du produit manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.delete('/deleteProduct/:idProduct', productController.deleteProduct);

module.exports = router;
