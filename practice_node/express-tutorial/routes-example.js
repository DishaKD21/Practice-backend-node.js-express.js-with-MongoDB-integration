const express = require('express');
const app = express();

// Dummy products data
const products = [
  { id: 1, label: "product 1" },
  { id: 2, label: "product 2" },
  { id: 3, label: "product 3" }
];

// Root route
app.get('/', (req, res) => {
  res.send("Welcome to our home page");
});

// Get all products
app.get("/products", (req, res) => {
  res.json(products);
});

// Get a single product by ID
app.get('/products/:id', (req, res) => {
  const productId = Number(req.params.id);   // Convert URL param to number

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({
      message: `Product with ID ${productId} not found`
    });
  }

  res.json(product);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running at port ${port}`);
});
