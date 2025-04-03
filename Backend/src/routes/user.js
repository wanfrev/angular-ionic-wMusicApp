const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

// Guardar canciones recientes
router.post('/viewed-tracks', async (req, res) => {
  const { email, track } = req.body;

  try {
    const user = await User.findOne({ email }); // Busca al usuario por email

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Evitar duplicados
    const isAlreadyViewed = user.viewedTracks.some((t) => t.id === track.id);
    if (!isAlreadyViewed) {
      user.viewedTracks.unshift(track); // Agregar al inicio
      if (user.viewedTracks.length > 10) {
        user.viewedTracks.pop(); // Limitar a 10 canciones recientes
      }
    }

    await user.save();
    res.status(200).json(user.viewedTracks);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar las canciones recientes', error });
  }
});

router.get('/viewed-tracks/:email', async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOne({ email }); // Busca al usuario por email

    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    res.status(200).json(user.viewedTracks);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las canciones recientes', error });
  }
});

router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    res.status(200).json({ email: user.email });
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el perfil', error });
  }
});

module.exports = router;