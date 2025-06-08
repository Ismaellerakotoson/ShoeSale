const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/UserRoute');
const productRoutes = require('./routes/ProductRoute');
const cartRoutes = require('./routes/CartRoute');
const orderRoutes = require('./routes/OrderRoute');
const orderItemRoutes = require('./routes/OrderItemRoute')

// Connexion DB
require('./config/db');

const app = express();

// Middleware CORS
app.use(cors());

// Middleware pour parser les données JSON
app.use(express.json());

// Middleware pour servir les fichiers statiques (images uploadées)
app.use('/uploads', express.static('middlewares/uploads'));

// Swagger setup
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sun-Co API',
      version: '1.0.0',
      description: 'Documentation de l\'API pour le site e-commerce Sun-Co',
    },
    servers: [
      {
        url: 'http://localhost:5000/api/product', // Correction: URL racine
      },
    ],
  },
  apis: ['./routes/*.js'], // Les routes avec la documentation Swagger
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Test route
app.get('/', (req, res) => {
  res.send('🚀 Serveur backend Sun-Co opérationnel ✅');
});

// Routes API
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/product', cartRoutes);
app.use('/api/product', orderRoutes);
app.use('/api/product', orderItemRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
  console.log(`📚 Swagger disponible sur http://localhost:${PORT}/api-docs`);
});
