import React, {Component} from 'react';
import Person from './Person/Person.js';

import classes from './Persons.module.css';

class Persons extends Component {
	render(){

	return this.props.persons.map((person, index) => {
    return (
    
    	<Person
    	toDelete={person.toDelete} 
    	id={person.id}
	    name={person.name}
	    age={person.age}
	    click={()=>this.props.clicked(index)}
	    key={person.id}
	    changed={(event) => this.props.changed(event, person.id)} // Change only one specific person
	   />
	  )})};
	
}


export default Persons;