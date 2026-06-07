// =====================================
// USER MANAGEMENT SYSTEM
// =====================================

const users = [];

function registerUser(name, email, password) {
    const user = {
        id: Math.floor(Math.random() * 100),
        name: name,
        email: email,
        password: password,
        createdAt: new Date()
    };

    users.push(user);

    return user;
}

function login(email, password) {
    const user = users.find(u => u.email === email);

    if (user.password === password) {
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

module.exports = {
    registerUser,
    login,
    deleteUser,
    getUser,
    getAllUsers,
    updateEmail,
    resetPassword
};