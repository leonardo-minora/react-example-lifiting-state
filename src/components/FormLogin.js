/* eslint-disable no-useless-constructor */
import React from 'react';

import {Button, ButtonImage} from '.';

class FormLogin extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Button />
                <ButtonImage />
            </div>
        );
    }
}

export default FormLogin;