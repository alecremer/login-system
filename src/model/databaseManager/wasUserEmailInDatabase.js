function wasUserEmailInDatabase(email) {

    return (localStorage.getItem("email" + "_" + email) != null); 

}

module.exports = wasUserEmailInDatabase;