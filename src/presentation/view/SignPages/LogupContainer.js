import React from "react";
import "../Styles/logContainer.css";
import TextInput from "../Components/Input/TextInput";
import Button from "../Components/Input/Button";
import { Redirect } from 'react-router-dom';

export default class LogupContainer extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {data: {password: "", passwordConfirmation: "", username: "", email: ""}, passwordValid: true, emailValid: true, emailInUse: false, usernameInUse: false};
    }

    setUsernameDataState(value) {
        this.setState({data: {...this.state.data, username: value}});
    }
    
    setEmailDataState(value) {
        this.setState({data: {...this.state.data, email: value}});
    }

    setPasswordDataState(value) {
        this.setState({data: {...this.state.data, password: value}});
    }

    setPasswordConfirmationDataState(value) {
        this.setState({data: {...this.state.data, passwordConfirmation: value}});
    }

    createAccount(){

        this.props.controller.createAccount(this.state.data);
        this.setState({passwordValid: this.props.controller.passwordValidCharactersOrNumberOfCharacters});
        this.setState({emailValid: this.props.controller.emailValid});
        this.setState({emailInUse: this.props.controller.emailInUse});
        this.setState({usernameInUse: this.props.controller.usernameInUse});

        this.redirectIfLogUp(this.props.controller.accountRegistered);
    }

    redirectIfLogUp(isRegistered){

        if(isRegistered === true) window.location.href = '/home';

    }
    
    debugDataState(){

        Object.entries(this.state.data).forEach(field => {
            const [key, value] = field;
            console.log(key, value);
        });
    
    }

    render(){

        return(
            <div>
                <div className="login-container">
                    <div className="logup-floating-box rounded-lg p-2 flex flex-col">
                    <h1>{this.state.passwordValid == true}</h1>
                        
                        <h1 className="text-xl font-bold">Login</h1>

                        <div className="grid  basis-11/12 p-2">
                            
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput value={this.state.data.username} label="Nome de usuário:" type="text" onChangeValue={(value) => this.setUsernameDataState(value)}/>
                            </div>
                            {(this.state.usernameInUse) &&
                            <p className="log-error pl-3">o nome de usuário já está em uso</p>}
                            
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput value={this.state.data.email} label="E-mail:" type="email" onChangeValue={(value) => this.setEmailDataState(value)}/>
                            </div>
                            {(!this.state.emailValid) &&
                            <p className="log-error pl-3">use um endereço de email válido</p>}
                            {(this.state.emailInUse) &&
                            <p className="log-error pl-3">o endereço de email já está em uso</p>}
                            
                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="Senha:" type="password" onChangeValue={(value) => this.setPasswordDataState(value)}/>
                            </div>
                            {(!this.state.passwordValid) &&
                            <p className="log-error pl-3">A senha deve conter 8 ou mais caracteres e não pode conter espaço " ' ;</p>}

                            <div className="flex items-center justify-center pr-2 pl-2">
                                <TextInput label="Confirmar senha:" type="password" onChangeValue={(value) => this.setPasswordConfirmationDataState(value)}/>
                            </div>
                            {(this.state.data.password != this.state.data.passwordConfirmation) && 
                            <p className="log-error pl-3">a senha e a confirmação não coincidem</p>}

                            <div className="flex items-center justify-center mt-1">
                                <Button label="Criar conta" onClick={() => this.createAccount()}/>
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