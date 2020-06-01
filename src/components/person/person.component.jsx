import React from 'react';
import './person.styles.scss';

const Person = ({name, age, children, changed, click}) => (
    <div className="person-card">
        <p onClick={click}>Hi, my name is {name}. As it turns out, I happen to be {age} years old! {children}</p>
        <input type="text" onChange={changed} value={name}/>
      
    </div>
)
export default Person;