import React from 'react';
import './userinput.styles.scss';

const UserInput = ({nameChanged, userName}) => (
    <div className="input-container">
        <input className="user-input" type="text" onChange={nameChanged} value={userName}/>
    </div>
) 

export default UserInput;