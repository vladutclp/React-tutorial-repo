//import React, { useState } from 'react';
import React, {Component} from 'react';
import './App.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person.js';
import styled from 'styled-components';

const StyledButton = styled.button`
      background-color: ${props => props.changeStyle ? 'red' : '#4CAF50'};
      font: inherit;
      border: 1px solid black;
      padding: 8px;
      cursor: pointer;
      color: black;
      outline: none;
      &:hover {
        background-color : ${props => props.changeStyle? 'salmon' : 'lightgreen'};
        color : white;
       }
`;


class App extends Component{

  // State of our component
   state = {
      persons: [
        { name: "Claps", age:25, id: 1, hidden: false },
        { name: "Hydra", age:22, id: 2, hidden: false },
        { name: "Kalos", age:21, id: 3, hidden: false }
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
    console.log(this.state);
    // const style = {
    //   backgroundColor: '#4CAF50',
    //   font: 'inherit',
    //   border: '1px solid black',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   color: 'black',
    //   outline: 'none',
    //   ":hover": {
    //     "backgroundColor" : "lightgreen",
    //     "color" : "white"
    //   }
    // };

    let person = null;
     if(this.state.hiddenDiv){
      // style.backgroundColor = 'red';
      // style.color = 'black';
      // style[":hover"] = {
      //   "backgroundColor" : "salmon",
      //   "color" : "white"
      // }
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
    }

    let classes = [];

    if(this.state.persons.length <= 2){
      classes.push('red');
    }

    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
  
    return(
      
        <div className="App">
          <h1>Hi I'm a React App </h1>
          <p className={classes.join(' ')}>This is working!</p>
          <StyledButton /*style={style}*/ changeStyle={this.state.hiddenDiv}
          onClick={this.togglePersonsHandler}>Switch name</StyledButton>
          {person}
        </div>
      
    )
  }
}
 

export default App;

/*

    togglePersonsHandler = (event) => {

      
        const btnId = event.target.id;
        switch(btnId){
          case "0":
          console.log(btnId);
            this.setState ({
              persons: [
                { name: "Claps", age:25, id: 1, hidden: !this.state.persons[0].hidden },
                { name: "Hydra", age:22, id: 2, hidden: this.state.persons[1].hidden },
                { name: "Kalos", age:21, id: 3, hidden: this.state.persons[2].hidden }
                ]
            })
            break;
          case "1":
          console.log(btnId);
            this.setState ({
              persons: [
                { name: "Claps", age:25, id: 1, hidden: this.state.persons[0].hidden },
                { name: "Hydra", age:22, id: 2, hidden: !this.state.persons[1].hidden },
                { name: "Kalos", age:21, id: 3, hidden: this.state.persons[2].hidden }
                ]
            })
            break;
          case "2":
            console.log(btnId);
            this.setState ({
              persons: [
                { name: "Claps", age:25, id: 1, hidden: this.state.persons[0].hidden },
                { name: "Hydra", age:22, id: 2, hidden: this.state.persons[1].hidden },
                { name: "Kalos", age:21, id: 3, hidden: !this.state.persons[2].hidden }
                ]
            })
            break;
          default:
            break;
        }
        
          
          
      //console.log(event.target.id);

    return(
      <div className="App">
        <h1>Hi I m a React App </h1>

        <div className="personWrapper"> 
          <button style={style}
                  onClick={this.togglePersonsHandler} id="0">{
            this.state.persons[0].hidden === true ? "Hide me" : "Show me" }
          </button>
          
          {
            this.state.persons[0].hidden === true && this.state.persons[0].id === 1 ? 
            <div>
              <Person name={this.state.persons[0].name} 
                      age={this.state.persons[0].age} />
            </div> : null 
          }
        </div>

        <div className="personWrapper">
          <button style={style}
                  onClick={this.togglePersonsHandler} id="1">{
            this.state.persons[1].hidden === true ? "Hide me" : "Show me" }
          </button>
          
          {
            this.state.persons[1].hidden === true && this.state.persons[1].id === 2 ? 
            <div>
              <Person name={this.state.persons[1].name} 
                      age={this.state.persons[1].age} />
            </div> : null 
          }
        </div>

        <div className="personWrapper">
          <button style={style}
                  onClick={this.togglePersonsHandler} id="2"> {
            this.state.persons[2].hidden === true ? "Hide me" : "Show me" }
          </button>
          
          {
            this.state.persons[2].hidden === true && this.state.persons[2].id === 3 ? 
            <div>
              <Person name={this.state.persons[2].name} 
                      age={this.state.persons[2].age} />
            </div> : null 
          }
        </div>

         
        
      </div>
    )
  }


 This is the function-based Component using useState hooks to change the state within the component
const App = props => {

    const [ personsState, setPeronsState ] = useState({
        persons: [
          { name: "Claps", age: 28},
          { name: "Hydra", age: 22},
          { name: "Romeo", age: 38}
        ]
    });

    const [otherState, setOtherState] = useState("Some other state");

    console.log(personsState);
    console.log(otherState);
    const switchNameHandler = () =>{
    //console.log('Was clicked');
    // DONT'T DO THIS this.state.persons[0].name = "Clapsky";
    setPeronsState({ 
      persons: 
      [
        { name: "Clapsonex", age: 28},
        { name: "Hydra", age: 22},
        { name: "Romeo", age: 312}
      ]
  })
  };

    return (
      <div className="App">
        <h1>Hi I m a React App </h1>
        <button onClick={switchNameHandler}>Switch name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Photography</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
};

export default App;
*/

