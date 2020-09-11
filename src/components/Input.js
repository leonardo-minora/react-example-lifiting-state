import React from 'react';

let Input = (props) => {
    let icon, title, type;

    if (props.type === "password") {
        icon = 'fas fa-key';
        title = 'senha';
        type = 'password';
    } else {
        icon = props.icon ? `fas fa-${props.icon}` : 'fas fa-infinity';
        title = props.title ? props.title : '';
        type = 'text';
    }

    let iconClass = props.check ? "icon is-small is-right has-text-success" : "icon is-small is-right";

    return (
        <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input className="input" type={type} placeholder={title} />
            <span className="icon is-small is-left">
                <i className={icon} />
            </span>
            <span className={iconClass}>
                <i className="fas fa-check" />
            </span>
        </p>
        </div>
    );
}

export default Input;