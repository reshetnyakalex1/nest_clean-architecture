// Default env vars for dev (NODE_ENV can be used if needed);
require('dotenv').config({ path: "./.env.dev" });

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
    },
};
