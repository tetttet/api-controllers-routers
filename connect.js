import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"database-user-const-root",
  password:"database-password",
  database:"name-of-database"
})
