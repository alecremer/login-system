function registerAccount(data){

    // do something in future, like register on database
    // return true if success, false if fail

    localStorage.setItem("username_" + data.username , data.username);
    localStorage.setItem("email_" + data.email, data.email);
    localStorage.setItem("password_"  + data.username, data.password);
    
    return true; 

}

module.exports = registerAccount;