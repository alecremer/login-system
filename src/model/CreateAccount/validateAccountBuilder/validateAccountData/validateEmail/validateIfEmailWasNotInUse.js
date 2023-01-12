var wasUserEmailInDatabase = require('../../../../databaseManager/wasUserEmailInDatabase');

function validateIfEmailWasNotInUse(email, responseToHandle) {

    var response = responseToHandle;

    var emailInUse = wasUserEmailInDatabase(email);

    response.emailInUse = emailInUse;

    return response;
    
}

module.exports = validateIfEmailWasNotInUse;