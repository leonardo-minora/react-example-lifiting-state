/* eslint-disable no-useless-constructor */
import React from 'react';

import {Input, ButtonImage} from '.';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="container is-fluid">
                <h1 class="title has-text-primary-dark">Autenticação</h1>
                <div>
                    <Input title='nome do usuário' icon='user-circle' check />
                    <Input type='password' message="senha não informada, por favor digite uma senha" error />
                </div>
                <div className="field is-grouped is-pulled-right">
                    <ButtonImage title="Entrar" icon="sign-in-alt" />
                    <ButtonImage title="Lembrar login ou senha" icon="question-circle" />
                    <ButtonImage title="Assinar" icon="hands-helping" disabled />
                </div>
            </div>
        );
    }
}

export default FormLogin;