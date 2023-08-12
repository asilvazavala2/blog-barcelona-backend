const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      access_level:{
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      password:{
        type: DataTypes.STRING,
        allowNull: true,
      },

      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      isActive:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue:true
      },

      image: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
    },
    {
      timestamps: true,
      paranoid: true  
    }
  );
};
