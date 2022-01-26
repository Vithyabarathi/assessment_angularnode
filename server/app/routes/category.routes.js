
const { Category} = require("../models/categoryindex.js");
 
module.exports = app => {
    
    const categoryvb=require("../controllers/category.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial

    router.post("/", categoryvb.create);
  
    // Retrieve all Tutorials
    
    router.get("/", categoryvb.findAll);
   
  
    // Retrieve all published Tutorials
    router.get("/published", categoryvb.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", categoryvb.findOne);
    // Update a Tutorial with id
    router.put("/:id", categoryvb.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", categoryvb.delete);
  
    // Delete all Tutorials
    router.delete("/", categoryvb.deleteAll);
  
    app.use('/api/categoryvbs', router);
  };