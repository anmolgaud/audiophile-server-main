const Product = require("../Models/Product");


const getAllProd = async (req, res)=>{
    try {
        const product = await Product.find({}).exec();
        if(!product){
            return res.status(200).json({message : "No Product in store"})
        }
        res.status(200).json({data : product});
    } catch (error) {
        res.status(500).json({message : error})
    }
}

const getProd = async (req, res) =>{
    const id = req.params.id;
    try {
        const prod = await Product.findById(id);
        if(!prod){
            return res.status(200).json({message : "Product Not Found"});
        }
        res.status(200).json({data : prod});
    } catch (error) {
        res.status(500).json({message : error});
    }
}

const addProd = async (req, res) =>{
    try {
        const prod = await Product.create(req.body);
        res.status(201).json({data : prod});
    } catch (error) {
        res.status(500).json({msg : error});
    }
}

module.exports = {
    getAllProd,
    getProd,
    addProd,
}