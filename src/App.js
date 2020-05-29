import React from 'react';

import './App.css';
import Person from './components/person/person.component'

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      persons: [
        {name: 'Horatio', age: 29, id: 1},
        {name: 'Tyrion', age: 37, id: 2},
        {name: 'Kratos', age: 300, id: 3}
      ]
    }
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'Guernica', age: 29, id: 1},
      {name: 'Sansa', age: 37, id: 2},
      {name: 'Pascal', age: 300, id: 3}
    ]})
  }
  render(){
    return (
      <div className="App">
        React
        <Person name="Brandon" age="2981">Here's your sign</Person>
        <Person name="Vincenzo" age="56">Put a fork in it</Person>
        {this.state.persons.map(person => <Person key={person.id} name={person.name} age={person.age}></Person>)}
        <button onClick={this.switchNameHandler}>Alert Button</button>
      </div>
    );
  }
}

export default App;
