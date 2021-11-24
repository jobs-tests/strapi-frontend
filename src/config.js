import dotenv from 'dotenv';

dotenv.config();
const config = {
  REACT_APP_API_BASE_URL: process.env.REACT_APP_API_BASE_URL,
  REACT_APP_API_CLIENT_ID: process.env.REACT_APP_API_CLIENT_ID,
  REACT_APP_API_CLIENT_SECRET: process.env.REACT_APP_API_CLIENT_SECRET,
  REACT_APP_MAPBOX_ACCESS_TOKEN: process.env.REACT_APP_MAPBOX_ACCESS_TOKEN,
};

export default config;
