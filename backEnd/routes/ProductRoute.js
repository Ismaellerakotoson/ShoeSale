const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const upload = require("../middlewares/upload");

/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Gestion des produits
 */

// Crée un nouveau produit avec ses détails et son image
/**
 * @swagger
 * /addProduct:
 *   post:
 *     summary: Ajouter un nouveau produit
 *     tags: [Product]
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
 *                 example: "Chaussure cool"
 *               price:
 *                 type: number
 *                 example: 49.99
 *               brand:
 *                 type: string
 *                 example: "Nike"
 *               description:
 *                 type: string
 *                 example: "Chaussures confortables et stylées"
 *               features:
 *                 type: array
 *                 items:
 *                 description: Liste des caractéristiques
 *                 example: ["Confortable", "Style", "Simple"]
 *               quantity:
 *                 type: integer
 *                 example: 12
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

// Supprime un produit existant par son identifiant
/**
 * @swagger
 * /deleteProduct/{idProduct}:
 *   delete:
 *     summary: Supprimer un produit par ID
 *     tags: [Product]
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

// Récupère la liste de tous les produits disponibles
/**
 * @swagger
 * /allProducts:
 *   get:
 *     summary: Récupérer tous les produits
 *     tags: [Product]
 *     responses:
 *       200:
 *         description: Liste des produits récupérée avec succès.
 *       500:
 *         description: Erreur serveur.
 */
router.get('/allProducts', productController.getAllProducts);

// Récupère les détails d’un produit spécifique par son identifiant
/**
 * @swagger
 * /oneProduct/{idProduct}:
 *   get:
 *     summary: Récupérer un produit par ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: idProduct
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID du produit à récupérer
 *     responses:
 *       200:
 *         description: Produit récupéré avec succès.
 *       400:
 *         description: ID du produit manquant.
 *       500:
 *         description: Erreur serveur.
 */
router.get('/oneProduct/:idProduct', productController.getOneProduct);

module.exports = router;
