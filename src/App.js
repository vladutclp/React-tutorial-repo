//import React, { useState } from 'react';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component{


   state = {
      persons: [
        { name: "Claps", age:25 },
        { name: "Hydra", age:22 },
        { name: "Kalos", age:21 }
      ],
      otherState: "some other state"
    }

    switchNameHandler = (newName) =>{
      this.setState({
        persons:[
          { name: newName, age:111 },
          { name: "Hydronex",      age:11 },
          { name: "Asdfgh",        age:110 }
        ]
      })
    }


    nameChangedHandler = (event) =>{
      this.setState({
        persons:[
          { name: "Claps",             age:25 },
          { name: event.target.value,  age:11 },
          { name: "Kalos",             age:21 }
        ]
      })
      console.log(event);
    }

  render(){

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return(
      <div className="App">
        <h1>Hi I m a React App </h1>
        <button style={style}
        onClick={() =>this.switchNameHandler("Claponex")}>Switch name</button>
        <Person name={this.state.persons[0].name} 
                age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} 
                age={this.state.persons[1].age} 
                click={this.switchNameHandler.bind(this, 'Hydoxiapalytaxe')}
                changed={this.nameChangedHandler}>Hobbies: Photography</Person>
        <Person name={this.state.persons[2].name} 
                age={this.state.persons[2].age} />
      </div>
    )
  }
}

/* This is the function-based Component using useState hooks to change the state within the component
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

export default App;