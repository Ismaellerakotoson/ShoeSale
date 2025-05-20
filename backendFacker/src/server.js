const express = require('express');
require('dotenv').config();
const userRoutes = require('./routes/fakeUserRoute');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
