const express = require("express");
const { getProducts, saveProducts } = require("../config/db");
const { authenticate } = require("../config/auth");
const router = express.Router();

// Get all products
router.get("/", authenticate, (req, res) => {
    res.json(getProducts());
});

// Get a single product
router.get("/:id", authenticate, (req, res) => {
    const products = getProducts();
    const product = products.find(p => p.id == req.params.id);
    product ? res.json(product) : res.status(404).json({ message: "Product not found" });
});

// Create a product
router.post("/", authenticate, (req, res) => {
    const products = getProducts();
    const newProduct = { id: Date.now(), ...req.body };
    products.push(newProduct);
    saveProducts(products);
    res.status(201).json(newProduct);
});

// Update a product
router.put("/:id", authenticate, (req, res) => {
    let products = getProducts();
    const index = products.findIndex(p => p.id == req.params.id);
    if (index === -1) return res.status(404).json({ message: "Product not found" });
    
    products[index] = { ...products[index], ...req.body };
    saveProducts(products);
    res.json(products[index]);
});

// Delete a product
router.delete("/:id", authenticate, (req, res) => {
    let products = getProducts();
    const filteredProducts = products.filter(p => p.id != req.params.id);
    if (products.length === filteredProducts.length) return res.status(404).json({ message: "Product not found" });
    
    saveProducts(filteredProducts);
    res.json({ message: "Product deleted successfully" });
});

module.exports = router;