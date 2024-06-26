import mysql from "mysql2/promise";
import dotenv from 'dotenv'

dotenv.config()

const config = {
    host: process.env.HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    waitForConnections: true
};

export const connection_pool = mysql.createPool(config);

export default async function query(query_sentence: string, params: any[]) {
    try {
        const current_connection = await connection_pool.getConnection();
        console.log("Conexión a la base de datos exitosa.");
        const result = await current_connection.execute(query_sentence, params);
        current_connection.release();
        return result;
    } catch (error) {
        console.error("Ha ocurrido un error con tu peticion:" + error);
        return null;
    }
}