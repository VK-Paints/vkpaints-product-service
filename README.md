# VK-Paints Product Service

## Description
Manages the paint catalog, inventory, and product specifications.

## Tech Stack
- Node.js & Express
- PostgreSQL & Sequelize
- prom-client

## Environment Variables
- PORT: Service port (default 3002)
- DB_URL: PostgreSQL connection string

## API Endpoints
- GET /api/products: List all products
- POST /api/products: Add new product
- GET /health: Health status
