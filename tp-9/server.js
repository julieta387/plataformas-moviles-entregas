const express=requiere('express');
const app=express();
const port=3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: "Bienvenido a la API de 7°2°" });
});

const usuariosRoutes=requiere('./routes/usuarios.routes');
const productosRoutes=requiere('./routes/productos.routes');

app.use('/usuarios',usuariosRoutes);
app.use('/productos',productosRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});