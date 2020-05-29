import React from 'react';
import './person.styles.scss';

const Person = ({name, age, children}) => (
    <div>
        <p> Hi, my name is {name}. As it turns out, I happen to be {age} years old! {children}</p>
      
    </div>
)
export default Person;