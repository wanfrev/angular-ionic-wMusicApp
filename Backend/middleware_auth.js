import jwt from 'jsonwebtoken';
import User from './src/models/User.js';

export const authenticateUser = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(401).json({ msg: 'No autorizado: No se proporcionó token' });
    }
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ msg: 'No autorizado: No se proporcionó token' });
    }
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return res.status(401).json({ msg: 'No autorizado: Token inválido' });
    }
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ msg: 'No autorizado: Usuario no encontrado' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error interno del servidor' });
  }
};
