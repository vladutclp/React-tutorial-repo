import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons.js'
import Cockpit from '../components/Cockpit/Cockpit.js'
import withClass from '../hoc/WithClass.js';
import Aux from '../hoc/Aux.js';
import AuthContext from '../context/auth-context.js';
class App extends Component{

  // State of our component
   state = {
      persons: [
        { name: "Claps", age:25, id: 1, hidden: false, toDelete: false },
        { name: "Hydra", age:22, id: 2, hidden: false, toDelete: false },
        { name: "Kalos", age:21, id: 3, hidden: false, toDelete: false }
       // { name: "Claps", age:24, id: 4, hidden: false, toDelete: false }
       // { name: "Hydra", age:22, id: 5, hidden: false, toDelete: false },
        //{ name: "Kalos", age:21, id: 6, hidden: false, toDelete: false }
      ],
      otherState: "some other state",
      hiddenDiv: false,
      authenticated: false
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

    loginHandler = () =>{
      this.setState({authenticated: true});
    }

    loginOutHandler = () =>{
      this.setState({authenticated: false});
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


    let persons = null;
     if(this.state.hiddenDiv){
      persons = (
          <div/*className={this.state.persons.length > 0 ? "personWrapper" : null}>*/>
          <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />
            
          </div>
      );

    }
    return(
      
      <Aux>
        <AuthContext.Provider value={{authenticated: this.state.authenticated, 
          login: this.loginHandler,
          logout: this.loginOutHandler}}>
          <Cockpit clicked={this.togglePersonsHandler} 
          length={this.state.persons.length}
          showPerson={this.state.hiddenDiv}
          title={this.props.title}/>
          {persons}
       </AuthContext.Provider>
      </Aux> 
    )
  }
}
 

export default withClass(App, classes.App);
