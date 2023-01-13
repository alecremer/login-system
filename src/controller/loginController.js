class loginController{
    
    constructor() {
        
        this.logged = "";

    }

    login(data) {
        
        if(data){
            var loginService = require('../model/Login/loginBuilder');

            this.logged = loginService(data.username, data.password);
            console.log("controller logged: " + this.logged);

        }

    }
    
   
}



module.exports = new loginController();