import React from 'react';
import classes from './Input.css';

const input = (props) => {

    let inputElement = <input className={classes.InputElement} {...props}/>
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.label}
            </label>
            { inputElement }
        </div>
    );
};

export default input;