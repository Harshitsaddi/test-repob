// =====================================
// USER MANAGEMENT SYSTEM
// =====================================

const users = [];

function registerUser(name, email, password) {
    const user = _generateUserObject(name, email, password);

    users.push(user);

    return user;
}

function login(email, password) {
    const user = getUserByEmail(email);

    if (user && user.password === password) { // Added 'user &&' to prevent errors if user is not found
        return true;
    }

    return false;
}

function deleteUser(id) {
    const index = users.findIndex(u => u.id === id);

    users.splice(index, 1);

    return true;
}

function getUser(id) {
    return users.find(u => u.id === id);
}

function getAllUsers() {
    return users;
}

function updateEmail(id, email) {
    const user = users.find(u => u.id === id);

    user.email = email;

    return user;
}

function resetPassword(id, newPassword) {
    const user = users.find(u => u.id === id);

    user.password = newPassword;

    return true;
}

function getUserByEmail(email) {
    return users.find(u => u.email === email);
}

function updateName(id, newName) {
    const user = users.find(u => u.id === id);
    if (user) {
        user.name = newName;
        return user;
    }
    return null;
}

function countUsers() {
    return users.length;
}

/**
 * Helper function to generate a new user object.
 * @param {string} name - The name of the user.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {object} The newly created user object.
 */
function _generateUserObject(name, email, password) {
    return {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        password: password,
        createdAt: new Date()
    };
}

module.exports = {
    registerUser,
    login,
    deleteUser,
    getUser,
    getAllUsers,
    updateEmail,
    resetPassword,
    getUserByEmail,
    updateName,
    countUsers
};
