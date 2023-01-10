import React from "react";
import "../../Styles/loginContainer.css";
import TextInput from "../Input/TextInput";
import Button from "../Input/Button";

export default class LoginContainer extends React.Component{

    render(){
        return(
            <div>
                <div className="login-container">
                    <div className="login-floating-box rounded-lg p-2 flex flex-col">
                        
                        <h1 className="text-xl font-bold">Login</h1>

                        <div className="grid  basis-11/12 p-2">

                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="E-mail:" type="email"/>
                            </div>
                            
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="Senha:" type="password"/>
                            </div>

                            <div className="flex items-center justify-center mt-1">
                                <Button label="Login"/>
                            </div>


                        </div>
                        
                        <div className="flex justify-center border-t pt-1">
                            <h1 className="text-sm">Não tem uma conta?</h1>
                            <a className="text-sm pl-1 redirect-log-text" href="/logup">Criar conta</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}