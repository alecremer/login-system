import React from "react";
import "../../Styles/loginContainer.css";
import TextInput from "../Input/TextInput";
import Button from "../Input/Button";

export default class LogupContainer extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {};  
    }

    setEmailDataState(value) {
        this.setState({data: {email: value}});
    }

    setPasswordDataState(value) {
        this.setState({data: {password: value}});
    }

    setPasswordConfirmationDataState(value) {
        this.setState({data: {passwordConfimation: value}});
    }
    
    render(){

        return(
            <div>
                <div className="login-container">
                    <div className="logup-floating-box rounded-lg p-2 flex flex-col">
                        
                        <h1 className="text-xl font-bold">Login</h1>

                        <div className="grid  basis-11/12 p-2">

                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="E-mail:" type="email" onChangeValue={(value) => this.setEmailDataState(value)}/>
                            </div>
                            
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="Senha:" type="password" onChangeValue={(value) => this.setPasswordDataState(value)}/>
                            </div>
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="Confirmar senha:" type="password" onChangeValue={(value) => this.setPasswordConfirmationDataState(value)}/>
                            </div>

                            <div className="flex items-center justify-center mt-1">
                                <Button label="Criar conta" onClick={() => this.props.controller.CreateAccount(this.state.data)}/>
                            </div>


                        </div>
                        
                        <div className="flex justify-center border-t pt-1">
                            <h1 className="text-sm">Já tem uma conta?</h1>
                            <a className="text-sm pl-1 redirect-log-text" href="/">Entrar com uma conta</a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}