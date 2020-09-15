import React from 'react';

let ButtonImage = (props) => {
    let title = props.title ? props.title : "botão";
    let icon = props.icon ? props.icon : "check";

    return (
        <div className="control">
            <button className="button is-success">
                <span className="icon is-small">
                    <i className={`fas fa-${icon}`} />
                </span>
                <span>{title}</span>
            </button>
        </div>
    );
}
    
export default ButtonImage;