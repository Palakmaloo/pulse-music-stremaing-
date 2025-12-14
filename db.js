const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_user',
  password: 'sample',
  database: 'music'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('MySQL connected successfully');
});

module.exports = db;
