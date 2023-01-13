function getPassword(username) {

    return localStorage.getItem("password_" + username); 

}

module.exports = getPassword;