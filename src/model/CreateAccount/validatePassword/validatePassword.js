function validatePassword(password) {

    // dont have space and ; " ' characters 
    // must have at last 8 chars and at max 32 chars 

    return /^((?!.*?[ ])(?!.*?[;"'])).{8,32}$/.test(password);

}

module.exports = validatePassword;

