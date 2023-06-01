# Prueba Técnica

## A tener en cuenta

Tuve problemas con cargar la imagen con el fetch utilizando la direccion que me proporcionaron: "https://via.placeholder.com/200x200.png?text=Move+me!".

El problema se debio a los Cors, dado a que no tenía permisos para hacer la consulta a ese link.

La solucion que aplique para traer la imagen desde un fetch fue montar un servidor propio que me carge la misma imagen. (el servidor esta hecho con Expres)

Es por ello que está la carpeta Server, ahí esta el servidor que se monto para capturar la imagen.

Para correr el server, desde terminal hay que dirigirse a la carpeta Server y ejecutar el siguiente comando:

```
node server.js
```

con ello la app en react puede acceder a la imagen, ya que en el servidor habilite el cors para que pueda ser utilizado en la app de react


## Prueba técnica

[ ] Utilice [Vite](https://vitejs.dev/) para inicializar el proyecto en React
[ ] para correr el proyecto hay que ejecutar los siguientes comandos en la terminal (primero hay que dirigirse a la carpeta *prueba-tecnica* desde la terminal):

```
npm install 
npm run dev
```