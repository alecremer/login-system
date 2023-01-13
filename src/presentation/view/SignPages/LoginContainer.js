import React from "react";
import "../Styles/logContainer.css";
import TextInput from "../Components/Input/TextInput";
import Button from "../Components/Input/Button";
import { logged } from "../../../controller/loginController";

export default class LoginContainer extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {loginError: false, logged: false, data: {username: "", password: ""}};
    }

    setUsernameDataState(value) {
        this.setState({data: {...this.state.data, username: value}});
    }

    setPasswordDataState(value) {
        this.setState({data: {...this.state.data, password: value}});
    }

    login(){

        if(this.state.data){

            this.props.controller.login(this.state.data);

            this.setState({logged: this.props.controller.logged});
            this.setState({loginError: !this.props.controller.logged});

        }

        this.redirectIfLogged(this.props.controller.logged);

    }

    redirectIfLogged(logged){

        if(logged === true) window.location.href = '/home';

    }


    render(){
        return(
            <div className="login-container">
                <div className="login-floating-box rounded-lg p-2 flex flex-col">
                    
                    <h1 className="text-xl font-bold">Login</h1>

                    <div className="grid  basis-11/12 p-2">

                        <div className="flex items-center justify-center pr-2 pl-2">
                            <TextInput value={this.state.data.username} label="Usuario:" type="email" onChangeValue={(value) => this.setUsernameDataState(value)}/>
                        </div>
                        {(this.state.loginError) &&
                        <p className="log-error pl-3">usuário ou senha incorretos</p>}
                        
                        
                        <div className="flex items-center justify-center pr-2 pl-2">
                            <TextInput label="Senha:" type="password" onChangeValue={(value) => this.setPasswordDataState(value)}/>
                        </div>

                        <div className="flex items-center justify-center mt-1">
                            <Button label="Login" onClick={() => this.login()}/>
                        </div>


                    </div>
                    
                    <div className="flex justify-center border-t pt-1">
                        <h1 className="text-sm">Não tem uma conta?</h1>
                        <a className="text-sm pl-1 redirect-log-text" href="/logup">Criar conta</a>
                    </div>

                </div>
            </div>
        )
    }

}