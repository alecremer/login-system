function wasUsernameInDatabase(username) {

    return (localStorage.getItem("username_" + username) != null); 

}

module.exports = wasUsernameInDatabase;