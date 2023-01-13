var login =  require("./login");
var getPassword = require('../databaseManager/getPassword');

function loginBuilder(username, password){

    var logged = login(username, password, getPassword);

    return logged;

}

module.exports = loginBuilder;