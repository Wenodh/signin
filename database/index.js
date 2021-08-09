import mysql from 'mysql';
const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'mern-stack-database',
};
const connection = mysql.createConnection(config);
connection.connect((error) => {
    !error
        ? console.log('Database Connected')
        : console.log('Database not Connected');
});

export default connection;
