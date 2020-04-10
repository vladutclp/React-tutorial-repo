import React from 'react';
import classes from './Person.module.css';
//import Radium from 'radium';
// import styled from 'styled-components';
// const StyledDiv = styled.div`
// 	width: 60%;
// 	margin: 16px auto;
// 	border: 1px solid #eee;
// 	box-shadow: 0 2px 3px #ccc;
// 	padding: 16px;
// 	text-align: center;
// 	font-weight: 800;
// 	@media (min-width: 500px) {
// 		width: 450px;
// 	}
// 	font-size: 1.5rem;
// 	&:nth-of-type(odd){
// 		background-color: #E00822;
// 		color: white;
// 		font-weight: 800;
// 	}

// 	background-color: #2FF8AA;
	
// 	input[type="text"]{
// 		font-size: 1.2rem;
// 		font-weight: 600;
// 		height: 50px;
// 		margin-bottom: 10%;
// 		text-align: center;
// 		width: 100%;
// 	}
// `;

const person = (props) => {

	// const style = {
	// 	'@media (min-width: 500px)':{
	// 		width: '450px'
	// 	}
	// }	
	let persClas = [classes.Person];
	if(props.age % 2){
		persClas.push(classes.Green);
	}
	else{
		persClas.push(classes.Yellow);
	}
	return (
		<div className={persClas.join(' ')}>
			<p onClick={props.click}> I'm {props.name} and I am {props.age} years old! </p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}/>

		</div>
	)

};

export default person;
