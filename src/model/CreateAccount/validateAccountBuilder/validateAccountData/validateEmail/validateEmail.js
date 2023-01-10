function validateEmail(email, responseToHandle){
  
  var response = responseToHandle;

  if(email){
    
    var validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    if(validEmail) response.emailValid = true;
    else response.emailValid = false;
  }
  else response.emailValid = false;

  return response;

}

module.exports = validateEmail;