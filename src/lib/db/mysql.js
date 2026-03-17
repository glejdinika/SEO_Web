import mysql from 'mysql2/promise';
import { env } from '$env/dynamic/private';

let connection = null;

export function createConnection() {
    if (!connection) {
       const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_PORT', 'DB_PASSWORD', 'DB_NAME'];
       const missingEnvVars = requiredEnvVars.filter((name) => !env[name]);

       if (missingEnvVars.length > 0) {
          throw new Error(`Missing required database environment variables: ${missingEnvVars.join(', ')}`);
       }

       connection = mysql.createConnection({
          host: env.DB_HOST,
          user: env.DB_USER,
          port: Number(env.DB_PORT),
          password: env.DB_PASSWORD,
          database: env.DB_NAME
       });
    }
    return connection;
}