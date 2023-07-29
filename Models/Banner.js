const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    bannerType : String,
    smText : String,
    mdText : String,
    lgText : String,
    description : String,
    imagePath : String,
})

const Banner = mongoose.model("Banner", bannerSchema);

module.exports = Banner;
