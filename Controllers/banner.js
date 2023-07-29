const mongoose = require("mongoose");
const Banner = require("../Models/Banner")

const getAllBanner = async (req, res) =>{
    try {
        const banner = await Banner.find({}).exec();
        if(!banner){
            return res.status(404).json({message : "No banner found!"})
        }
        res.status(200).json({data : banner});
    } catch (error) {
        res.status(404).json({message : "No Banner Found"});
    }
};

const getIdBanner = async (req, res) => {
    try {
        const id = req.param.id;
        const banner = await Banner.findById(id);
        if(!banner){
            return res.status(404).json({message : "Banner Not Found"});
        }
        res.status(200).json({data : banner});
    } catch (error) {
        res.status(500).json({message : error});
    }
}


const postBanner = async (req, res) => {
    try {
        const banner = await Banner.create(req.body);
        res.status(201).json({banner});
    } catch (error) {
        res.status(500).json({message : error});
    }
}

module.exports =  {
    getAllBanner,
    getIdBanner,
    postBanner
}