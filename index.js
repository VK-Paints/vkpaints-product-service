const app = require('./src/app');
const { connectDB } = require('./src/config/db');
const Product = require('./src/models/product.model');

const PORT = process.env.PORT || 3002;

const startServer = async () => {
  try {
    await connectDB();

    // Seed Initial Products if database is empty
    const count = await Product.count();
    if (count === 0) {
      await Product.bulkCreate([
        { name: 'Standard Wall Putty', type: 'Wall Putty', color: 'White', price_per_liter: 40, coverage_sqft_per_liter: 15 },
        { name: 'Acrylic Wall Putty', type: 'Wall Putty', color: 'White', price_per_liter: 80, coverage_sqft_per_liter: 20 },
        { name: 'Interior Wall Primer', type: 'Wall Primer', color: 'White', price_per_liter: 150, coverage_sqft_per_liter: 100 },
        { name: 'Exterior Wall Primer', type: 'Wall Primer', color: 'White', price_per_liter: 180, coverage_sqft_per_liter: 90 },
        { name: 'Acrylic Distemper', type: 'Distemper', color: 'White', price_per_liter: 60, coverage_sqft_per_liter: 60 },
        { name: 'Synthetic Distemper', type: 'Distemper', color: 'Cream', price_per_liter: 50, coverage_sqft_per_liter: 50 },
        { name: 'Premium Interior Emulsion', type: 'Emulsion', color: 'White', price_per_liter: 300, coverage_sqft_per_liter: 120 },
        { name: 'Luxury Exterior Emulsion', type: 'Emulsion', color: 'White', price_per_liter: 450, coverage_sqft_per_liter: 100 },
        { name: 'Royal Matt', type: 'Interior', color: 'White', price_per_liter: 500, coverage_sqft_per_liter: 120 },
        { name: 'WeatherCoat', type: 'Exterior', color: 'Beige', price_per_liter: 650, coverage_sqft_per_liter: 90 },
        { name: 'Satin Enamel', type: 'Wood/Metal', color: 'Blue', price_per_liter: 400, coverage_sqft_per_liter: 150 }
      ]);
      console.log('📦 Initial products seeded.');
    }

    app.listen(PORT, () => {
      console.log(`🚀 Product Service running on port ${PORT}`);
    });
  } catch (err) {
    console.error('❌ Product Service startup failed:', err.message);
    setTimeout(startServer, 5000);
  }
};

startServer();
