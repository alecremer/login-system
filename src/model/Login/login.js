function login(username, password, searchPasswordInDatabase){

   

    var passwordInDatabase = searchPasswordInDatabase(username);

    if(passwordInDatabase == null){
        return false;
    }

    var passwordMatch = (password == passwordInDatabase);
    
    return passwordMatch;


}

module.exports = login;