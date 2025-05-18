const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require("./routes/UserRoute");
const productRoutes = require("./routes/ProductRoute");

// Connexion DB
require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Serveur backend opérationnel ✅');
});

app.use('/api/user',userRoutes);
app.use('/api/product',productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur le port ${PORT}`);
});
