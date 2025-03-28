const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://wanfrev:29977@wmusicapp.1clx9.mongodb.net/?retryWrites=true&w=majority&appName=wMusicApp', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error.message);
    process.exit(1); // Detiene la ejecución si falla la conexión
  }
};

module.exports = connectDB;
