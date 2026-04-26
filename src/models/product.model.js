const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');

const Product = sequelize.define('Product', {
  name: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  type: { 
    type: DataTypes.STRING, 
    allowNull: false 
  }, // e.g., Interior, Exterior
  color: { 
    type: DataTypes.STRING, 
    allowNull: false 
  },
  price_per_liter: { 
    type: DataTypes.FLOAT, 
    allowNull: false 
  },
  coverage_sqft_per_liter: { 
    type: DataTypes.FLOAT, 
    defaultValue: 100 
  }
}, {
  timestamps: true
});

module.exports = Product;
