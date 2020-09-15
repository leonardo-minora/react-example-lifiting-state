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
    let messageClass = "help is-success";
    let message = null;
    if (props.error) {
        message = props.message ? props.message : null;
        messageClass = "help is-danger";
    }
    let onChange = props.onChange ? props.onChange : null;

    return (
        <div className="field">
            <div className="control has-icons-left has-icons-right">
                <input className="input" type={type} placeholder={title} onChange={onChange} />
                <span className="icon is-small is-left">
                    <i className={icon} />
                </span>
                <span className={iconClass}>
                    <i className="fas fa-check" />
                </span>
                <p className={messageClass} hidden={!message}>{message}</p>
            </div>
        </div>
    );
}

export default Input;