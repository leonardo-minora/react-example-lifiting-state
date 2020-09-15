/* eslint-disable no-useless-constructor */
import React from 'react';

import {Input, ButtonImage} from '.';

class FormLogin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    isUsernameOk() {
        return this.state.username !== '';
    }

    isPasswordOk() {
        return this.state.password !== '';
    }

    habilitaEntrada() {
        return this.isUsernameOk() && this.isPasswordOk();
    }

    onChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    render() {
        return (
            <div className="container is-fluid">
                <h1 className="title has-text-primary-dark">Autenticação</h1>
                <div>
                    <Input 
                        title='nome do usuário' 
                        icon='user-circle' 
                        check={this.isUsernameOk()}
                        onChange={this.onChangeUsername} />
                    <Input 
                        type='password' 
                        check={this.isPasswordOk()}
                        error={!this.isPasswordOk()}
                        onChange={this.onChangePassword}
                        message="senha não informada, por favor digite uma senha" />
                </div>
                <div className="field is-grouped is-pulled-right">
                    <ButtonImage title="Entrar" icon="sign-in-alt" disabled={!this.habilitaEntrada()} />
                    <ButtonImage title="Lembrar login ou senha" icon="question-circle" />
                    <ButtonImage title="Assinar" icon="hands-helping" />
                </div>
            </div>
        );
    }
}

export default FormLogin;