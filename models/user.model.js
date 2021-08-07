let query = '';
const createUser = (connection, data, callback) => {
    query = 'INSERT INTO users SET ?';
    connection.query(query, [data], callback);
};
const fetchUser = (connection, id, callback) => {
    query = 'SELECT *,"" as password FROM users WHERE id=?';
    connection.query(query, [id], callback);
};
const updateUser = (connection, data, email, callback) => {
    query = 'UPDATE users SET ? WHERE email=?';
    connection.query(query, [data, email], callback);
};
// const deleteUser = (connection, data, email, callback) => {
//     query = 'UPDATE users SET ? WHERE email=?';
//     connection.query(query, [data, email], callback);
// };
export { createUser, fetchUser, updateUser };
