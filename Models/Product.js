const mongoose = require('mongoose');

const ProdSchema = new mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    },
    category : {
        type : String,
        require : true,
    },
    previewImgPath : {
        type : String,
        default : "",
    },
    descImgPath : {
        type : Array,
        default : [],
    },
    price : Number,
});

const Product = mongoose.model("Product",ProdSchema);
module.exports = Product;
