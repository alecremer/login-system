var wasUsernameInDatabase = require('../../../../databaseManager/wasUsernameInDatabase');

function validateIfUsernameWasNotInUse(username, responseToHandle) {

    var response = responseToHandle;

    var usernameInUse = wasUsernameInDatabase(username);

    response.usernameInUse = usernameInUse;

    return response;
    
}

module.exports = validateIfUsernameWasNotInUse;