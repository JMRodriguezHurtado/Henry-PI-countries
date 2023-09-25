const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  return sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3), 
      primaryKey: true, 
      allowNull: false,
      unique: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB('long'), 
      allowNull: true,
    },
    continente: {
      type: DataTypes.ENUM('America', 'Europa', 'Africa', 'Asia', 'Oceania'),
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregión: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    población: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  } 
  );
};