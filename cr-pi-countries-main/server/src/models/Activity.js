const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Activity', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      difficulty: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validator: {
            min: 1, 
            max: 5,
        }
      },
      season: {
        type: DataTypes.ENUM('Primavera', 'Verano', 'Otoño', 'Invierno'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL, 
        allowNull: false,
        validate: {
          min: 1,
          max: 5,
        },
      },
  })
};