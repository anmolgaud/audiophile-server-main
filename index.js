const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors");
const productRoutes = require("./Routes/product");
const bannerRoutes = require("./Routes/banner")
require("dotenv").config();
const app = express();
const Banner = require("./Models/Banner");
const bannerData = require("./data");

//middlewares
app.use(express.static('./public/assets'));
app.use(cors())
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());

//routes
app.use("/api/product", productRoutes);
app.use("/api/banner", bannerRoutes);


const PORT = process.env.PORT || 3001;
const connectDB = (url) =>{
    return mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(()=>console.log('connected to DB')) 
      .catch((error)=>console.log(error))
}

const start = async ()=>{
    try {
        await connectDB(process.env.URI);
        app.listen(PORT, () => console.log(`Server Port : ${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start();

