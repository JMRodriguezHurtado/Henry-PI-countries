const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  
  sequelize.define('Actividades Turisticas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dificultad: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validator: {
            min: 1, 
            max: 5,
        }
      },
      temporada: {
        type: DataTypes.ENUM('Primavera', 'Verano', 'Otoño', 'Invierno'),
        allowNull: false,
      },
      duracion: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      rating: {
        type: DataTypes.DECIMAL, 
        allowNull: true,
        validate: {
          min: 1,
          max: 5,
        },
      },
  })
};