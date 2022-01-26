const { Product } = require("../models/index.js");
 
module.exports = app => {
    const productvb = require("../controllers/product.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", productvb.create);
  
    // Retrieve all Tutorials
    router.get("/", productvb.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", productvb.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", productvb.findOne);
    // Update a Tutorial with id
    router.put("/:id", productvb.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", productvb.delete);
  
    // Delete all Tutorials
    router.delete("/", productvb.deleteAll);
  
    app.use('/api/productvbs', router);
  };