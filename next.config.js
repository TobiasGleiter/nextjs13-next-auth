/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,

    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,

    MONGO_DB_URI: process.env.MONGO_DB_URI,
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,

    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
