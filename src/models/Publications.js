const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "publications",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
            
      date:{
        type: DataTypes.STRING,
        allowNull: false,
      },

      author: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: { 
        type: DataTypes.STRING(500),
        allowNull: true,
      },

      category: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      theme: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

    },
    {
      timestamps: true,
      paranoid: true  
    }
  );
};
