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
        type: DataTypes.ENUM('Autumn', 'Winter', 'Spring', 'Summer'),
        allowNull: false,
      },
      duration: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validator: {
          min: 1,
          max: 5
        }},
        image: {
          type: DataTypes.STRING, 
          allowNull: true,
      }
  })
};