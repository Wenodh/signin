let query = '';
const createUser = (connection, data, callback) => {
    query = 'INSERT INTO users SET ?';
    connection.query(query, [data], callback);
};

const updateUser = (connection, data, callback) => {
    query = 'INSERT INTO users SET ?';
    connection.query(query, [data], callback);
};
const fetchUser = (connection, id, callback) => {
    query = 'SELECT *,"" as password FROM users WHERE id=?';
    connection.query(query, [id], callback);
};

export { createUser, fetchUser, updateUser };
