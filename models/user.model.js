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
const deleteUserAccount = (connection, email, callback) => {
    query = 'DELETE FROM users WHERE email=?';
    connection.query(query, [email], callback);
};
const fetchUserWithPassword = (connection, email, callback) => {
    query = 'SELECT * FROM users WHERE email=?';
    connection.query(query, [email], callback);
};

export {
    createUser,
    fetchUser,
    updateUser,
    deleteUserAccount,
    fetchUserWithPassword,
};
