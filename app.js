// app.js
const express = require('express');
const app = express();

// Ruta raíz
app.get('/', (req, res) => {
  res.send('Bienvenido a la página principal');
});

// Ruta de clientes
app.get('/clientes', (req, res) => {
  res.send('Lista de clientes: cliente1, cliente2, cliente3');
});

// Ruta de productos
app.get('/productos', (req, res) => {
  res.send('Lista de productos: producto1, producto2, producto3');
});

const PORT = process.env.PORT || 12700;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
