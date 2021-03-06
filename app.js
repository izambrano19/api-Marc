//PRIMER EJEMPLO
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//CREACIÓN DE UNA APLICACIÓN WEB QUE DEVUELVE DATOS JSON

app.get("/products", (req,res) => {
  const products = [
  {
    id: 1,
    name: "hammer",
  },
  {
    id: 2,
    name: "screwdriver",
  },
  ,
  {
    id: 3,
    name: "wrench",
  },
 ];

 res.json(products);
});