import { Client } from 'pg';
import 'dotenv/config';

type DetailsType = {
  user: string;
  password: string;
  host: string;
  port: number;
  database: string;
};

const details: DetailsType = {
  user: process.env.DB_USER || '',
  password: process.env.DB_PASS || '',
  host: process.env.DB_HOST || '',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  database: process.env.DB_NAME || '',
};

const client = new Client({
  user: details.user,
  password: details.password,
  host: details.host,
  port: details.port,
  database: details.database,
});

const connectDB = async () => {
  try {
    // Check if database credentials are provided
    if (!details.user || !details.password || !details.host || !details.database) {
      console.warn('⚠️  Database credentials not configured. Skipping database connection.');
      console.warn('   Server will start but database features will not work.');
      return;
    }
    await client.connect();
    console.log('✓ Connected to the database');
  } catch (err:any) {
    console.warn('⚠️  Database connection failed:', err.message);
    console.warn('   Server will continue without database connection.');
    console.warn('   Some features may not work properly.');
    // Don't exit - allow server to run without database
  }
};

export { client, connectDB };
