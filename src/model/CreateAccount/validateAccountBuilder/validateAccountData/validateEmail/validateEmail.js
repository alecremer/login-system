function validateEmail(email){
  if(email){
    
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  }
  else return false;

}

module.exports = validateEmail;