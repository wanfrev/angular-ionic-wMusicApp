const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { registerSchema, loginSchema } = require('../validators/userValidator'); // Importa los esquemas de validación

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res, next) => {
  try {
    // Validar los datos de entrada
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, email }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1h' });

    res.status(201).json({ token, user: { id: newUser._id, email }, mensaje: 'Usuario registrado con éxito' });
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
});

// Inicio de sesión
router.post('/login', async (req, res, next) => {
  try {
    // Validar los datos de entrada
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos' });
    }

    const token = jwt.sign({ id: user._id, email }, process.env.JWT_SECRET || 'secreto', { expiresIn: '1h' });

    res.json({ token, user: { id: user._id, email }, mensaje: 'Inicio de sesión exitoso' });
  } catch (error) {
    next(error); // Pasa el error al middleware de manejo de errores
  }
});

module.exports = router;