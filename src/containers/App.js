//import React, { useState } from 'react';
import React, {Component} from 'react';
import classes from './App.module.css';
//import Radium, {StyleRoot} from 'radium';
// import styled from 'styled-components';
import Person from '../components/Persons/Person/Person.js';




class App extends Component{

  // State of our component
   state = {
      persons: [
        { name: "Claps", age:25, id: 1, hidden: false },
        { name: "Hydra", age:22, id: 2, hidden: false },
        { name: "Kalos", age:21, id: 3, hidden: false },
        { name: "Claps", age:24, id: 4, hidden: false },
        { name: "Hydra", age:22, id: 5, hidden: false },
        { name: "Kalos", age:21, id: 6, hidden: false }
      ],
      otherState: "some other state",
      hiddenDiv: false
    }

    // Class method used to change the state of the name field from person object
    switchNameHandler = (newName) =>{
      this.setState({
        persons:[
          { name: newName,         age:111 },
          { name: "Hydronex",      age:11  },
          { name: "Asdfgh",        age:110 }
        ]
      })
    }

 
    nameChangedHandler = (event, id) =>{

      const personIndex = this.state.persons.findIndex( personId => { //finds an element that safisfies the condition
        return personId.id === id;  // below. If the person id === passedId the function returns the index of that element
      });

      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value; // change the name of the person

      const persons = [...this.state.persons]; // the persons aray
      persons[personIndex] = person;
     // const person = this.state.persons[personIndex];

      //const person = Object.assign({}, this.state.persons[personIndex]);
      this.setState({ persons: persons });
      console.log(event);
    }

    togglePersonsHandler = () => {
      const hiddenDiv = this.state.hiddenDiv;
      this.setState({ hiddenDiv: !hiddenDiv });
    }

    deletePersonHandler = (personIndex) => {
      //const persons = this.state.persons.slice();//copy the full array  
      const persons = [...this.state.persons]; // copy the persons array using the spread operator
      persons.splice(personIndex, 1); //remove from position personIndex 1 element
      this.setState({persons: persons})
    }

  render(){
    let btnClass = [classes.Button];
    console.log(this.state);
    let person = null;
     if(this.state.hiddenDiv){
      person = (
          <div/*className={this.state.persons.length > 0 ? "personWrapper" : null}>*/>
          {this.state.persons.map((person, index) => {
            return (<Person 
            name={person.name}
            age={person.age}
            click={()=>this.deletePersonHandler(index)}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} // Change only one specific person
             />);}
          )}
            
          </div>
      );

      btnClass.push(classes.Red);
    }

    let assignedClasses = [];

    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    console.log(btnClass);
    return(
      
        <div className={classes.App}>
          <h1>Hi I'm a React App </h1>
          <p className={assignedClasses.join(' ')}>This is working!</p>
          <button className={btnClass.join(' ')} 
          onClick={this.togglePersonsHandler}>Switch name</button>
          {person}
        </div>
      
    )
  }
}
 

export default App;
