function wasUserEmailInDatabase(email) {

    return (localStorage.getItem("email_" + email) != null); 

}

module.exports = wasUserEmailInDatabase;