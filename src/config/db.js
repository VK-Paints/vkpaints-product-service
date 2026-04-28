const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_URL || 'postgres://postgres:postgres@localhost:5432/product_db',
  {
    logging: false,
    dialect: 'postgres'
  }
);

const connectDB = async (sync = true) => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to Product DB');
    
    if (sync) {
      await sequelize.sync({ alter: true });
      console.log('✅ Product Database Synced');
    }
  } catch (error) {
    console.error('❌ Product Database connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = { sequelize, connectDB };
