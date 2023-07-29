const express = require("express");
const {getAllProd, getProd, addProd} = require("../Controllers/product");
const router = express.Router();

//get all prouduct
router.get("/", getAllProd);

//get singleProduct
router.get("/:id", getProd);

//add new Product
router.post("/", addProd);

module.exports = router;
