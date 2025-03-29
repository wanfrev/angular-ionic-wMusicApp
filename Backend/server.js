
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config();

const connectDB = require('./db/db');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const spotifyRoutes = require('./routes/spotifyRoutes');

const app = express();

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api', routes);
app.use('/api/spotify', spotifyRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use((req, res) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
