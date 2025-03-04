const fs = require("fs");
const path = "./product.json"; // Updated to use the root folder JSON file

const getProducts = () => JSON.parse(fs.readFileSync(path));
const saveProducts = (data) => fs.writeFileSync(path, JSON.stringify(data, null, 2));

module.exports = { getProducts, saveProducts };