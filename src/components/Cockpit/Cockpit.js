import React, {useEffect, useRef, useContext} from 'react';
import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect( () => {
    toggleBtnRef.current.click();
  }, []);


  let btnClass = '';
  let assignedClasses = [];
  if(props.length <= 2){
    assignedClasses.push(classes.red);
  }

  if(props.length <= 1){
    assignedClasses.push(classes.bold);
  }



	return(
		<div className={classes.Cockpit}>
	 		<h1>{props.title}</h1>
   		<p className={assignedClasses.join(' ')}>This is working!</p>
    	<button ref={toggleBtnRef} className={btnClass} 
    	onClick={props.clicked}>Switch name</button>    
      <button onClick={authContext.login}>Log In</button>
      <button onClick={authContext.logout}>Log Out</button>
      
  	</div>);
}

export default cockpit;