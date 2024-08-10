import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'
dotenv.config()

const SSL = process.env.POSTGRES_SSL === 'true' ? true : false

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: SSL,
})

pool.connect()

export const getNotes = async () => {
  const { rows } = await pool.query(`SELECT * FROM notes`)
  return rows
}

export const getNote = async (id: string) => {
  const { rows } = await pool.query(`SELECT * FROM notes WHERE id = $1`, [id])
  return rows[0]
}
