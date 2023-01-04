function validateAccountData(data, validators) {

    var invalidData = false;

    validators.forEach(validator => {

        var checkedDataStatus = validator(data);
        
        if(checkedDataStatus == false){
            invalidData = true;
        }


    });

    return !invalidData;

}

module.exports = validateAccountData;