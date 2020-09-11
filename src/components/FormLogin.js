/* eslint-disable no-useless-constructor */
import React from 'react';

import {Input, ButtonImage} from '.';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Input title='nome do usuário' icon='user-circle' check />
                <Input type='password' />
                <ButtonImage />
            </div>
        );
    }
}

export default FormLogin;