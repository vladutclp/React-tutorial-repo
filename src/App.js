//import React, { useState } from 'react';
import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js';



class App extends Component{


   state = {
      persons: [
        { name: "Claps", age:25, id: 1, hidden: false },
        { name: "Hydra", age:22, id: 2, hidden: false },
        { name: "Kalos", age:21, id: 3, hidden: false }
      ],
      otherState: "some other state",
      hiddenDiv: false
    }

    switchNameHandler = (newName) =>{
      this.setState({
        persons:[
          { name: newName,         age:111 },
          { name: "Hydronex",      age:11  },
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
        
          /*
          const hiddenDiv = this.state.hiddenDiv
          this.setState({
            hiddenDiv: !hiddenDiv
          })
          */
      console.log(event.target.id);
    }

  render(){

    const style = {
      backgroundColor: '#4CAF50',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      color: 'white',
      outline: 'none'
    };
/*
    return(
      <div className="App">
        <h1>Hi I m a React App </h1>
        <button style={style}
        onClick={this.togglePersonsHandler}>Switch name</button>
        {
          this.state.hiddenDiv === true && this.state.person[0].id ===1 ? 
          <div>
            <Person name={this.state.persons[0].name} 
                    age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name} 
                    age={this.state.persons[1].age} 
                    click={this.switchNameHandler.bind(this, 'Hydoxiapalytaxe')}
                    changed={this.nameChangedHandler}>Hobbies: Photography</Person>
            <Person name={this.state.persons[2].name} 
                    age={this.state.persons[2].age} /> 
          </div> : null
        }
      </div>
    )
*/  

    
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