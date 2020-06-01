import React from 'react';

import './App.css';
import Person from './components/person/person.component';
import UserInput from './components/userInput/userInput.component';
import UserOutput from './components/userOutput/userOutput.component';

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      persons: [
        {name: 'Horatio', age: 29, id: 1},
        {name: 'Tyrion', age: 37, id: 2},
        {name: 'Kratos', age: 300, id: 3}
      ],
      userName: 'Big Bird',
      showPersons: false
    }
  }

  switchNameHandler = () => {
    this.setState({persons: [
      {name: 'Guernica', age: 29, id: 1},
      {name: 'Sansa', age: 37, id: 2},
      {name: 'Pascal', age: 300, id: 3}
    ]})
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]}

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }
  userNameChangedHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }
  togglePersonsHandler = (event) => {
    this.setState({
      showPersons: !(this.state.showPersons)
    })
  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }
  render(){
    const buttonStyle = {
      backgroundColor: 'white', 
      border: '1px solid steelblue', 
      padding: '10px 20px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons){
      persons = (
        <div class="exercise">
        <h2>Exercise</h2>
        <UserInput nameChanged={this.userNameChangedHandler} userName={this.state.userName}></UserInput>
        <UserOutput userName={this.state.userName} value={this.state.userName} ></UserOutput>
        <UserOutput userName={this.state.userName} value={this.state.userName} ></UserOutput>
        <UserOutput userName={this.state.userName} value={this.state.userName} ></UserOutput>
      </div> 
      )
    }
    return (
      <div className="App">
        React
        <Person name="Brandon" age="2981">Here's your sign</Person>
        <Person name="Vincenzo" age="56">Put a fork in it</Person>
        {this.state.persons.map((person, index) => <Person key={person.id} name={person.name} age={person.age} changed={(event) => this.nameChangedHandler(event, person.id)} click={() => this.deletePersonHandler(index)}></Person>)}
        <button style={buttonStyle} onClick={this.switchNameHandler}>Alert Button</button>
        <button onClick={this.togglePersonsHandler}>Toggle Person</button>
        {persons}
       
        
      </div>
    );
  }
}

export default App;
