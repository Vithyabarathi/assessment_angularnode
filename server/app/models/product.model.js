module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("productvb", {
      
      P_Name: {
        type: Sequelize.STRING
      },
      Prize: {
        type: Sequelize.FLOAT
      },
      CountryOfOrigin: {
        type: Sequelize.STRING
      },
      Category:{
        type: Sequelize.INTEGER 
        
      }
     
    },
    {
      timestamps: false,
    });
  
    return Product;
    
  };
