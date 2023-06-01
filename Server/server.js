const express = require('express');
const req = require('express/lib/request');
const path = require('path');

const app = express();
const port = 8000;

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    next();
})

// Ruta para servir la imagen
app.get('/imagen', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'drag.png');
    res.sendFile(imagePath);
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor en línea en http://localhost:${port}`);
});
