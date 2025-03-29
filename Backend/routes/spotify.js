const express = require('express');
const router = express.Router();
const axios = require('axios');
const { getSpotifyAccessToken } = require('../utils/spotifyUtils');

// Buscar canciones en Spotify
router.get('/search', async (req, res) => {
  const query = req.query.q;
  if (!query) return res.status(400).json({ error: 'Falta el parámetro de búsqueda' });

  try {
    // Si no hay token válido, obtén uno nuevo
    if (!process.env.SPOTIFY_ACCESS_TOKEN) {
      await getSpotifyAccessToken();
    }

    const response = await axios.get(`https://api.spotify.com/v1/search`, {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
      },
      params: {
        q: query,
        type: 'track',
        limit: 10,
      },
    });

    const results = response.data.tracks.items.map(track => ({
      id: track.id,
      title: track.name,
      artist: track.artists.map(a => a.name).join(', '),
      album: track.album.name,
      albumCover: track.album.images[0]?.url || '',
      audioUrl: track.preview_url,
    }));

    res.json(results);
  } catch (error) {
    console.error('Error en búsqueda Spotify:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Error al buscar canciones en Spotify' });
  }
});

module.exports = router;
