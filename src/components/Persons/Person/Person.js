import React, {Component} from 'react';
import classes from './Person.module.css';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import Aux from '../../../hoc/Aux.js';
import withClass from '../../../hoc/WithClass.js';
import AuthContext from '../../../context/auth-context.js';

class Person extends Component {

	constructor(props){
		super(props);
		this.inputElementRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount(){
		this.inputElementRef.current.classList.add(classes.Blue);
	}

	render(){

	 let persClas = [classes.Person];
		if(this.props.age % 2){
			persClas.push(classes.Green);
		}
		else{
			persClas.push(classes.Yellow);
		}

	return (
		<Aux>
			{this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
			<p onClick={this.props.click} ref={this.inputElementRef}> I'm {this.props.name} and I am {this.props.age} years old! </p>
			<p >{this.props.children}</p>
			<input type="text" onChange={this.props.changed} value={this.props.name}/>
		</Aux>
	)};

};

export default withClass(Person, classes.Person);
