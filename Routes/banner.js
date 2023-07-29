const express = require("express");
const router = express.Router();
const {getAllBanner, getIdBanner, postBanner} = require("../Controllers/banner")

//getAll Banner
router.get("/", getAllBanner);

//getbyId
router.get("/:id", getIdBanner);

//post banner
router.post("/", postBanner);

module.exports = router;