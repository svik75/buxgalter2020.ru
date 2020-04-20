import React, { useState} from 'react';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import { Redirect} from 'react-router-dom';
import Menu from '../Menu';
import { isEmpty, isLoaded } from "react-redux-firebase";
import { useSelector } from 'react-redux'




export default function Auth() {
  const auth = useSelector(state => state.firebase.auth)
  const admin = localStorage.getItem('admin');
  const [register, setRegister] = useState(false);
  const [title, setTitle] = useState('Регистрация');


  // -----------------------------------------------------
  const handleClick = (e) => {
    e.preventDefault();

    if (register) {
      setRegister(false); setTitle('Регистрация');
    } else {
      setRegister(true); setTitle('Вход');
    }
  }
  
  // ------------------------------------------------------

  let log;
  if (!register && isEmpty(auth)) {
    log = <Login />
  } else if (register && isEmpty(auth)) {
    log = <Register />
  }

  const divStyle = {
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    verticalAlign: 'middle',
    position: 'absolute',
    top: '50%',
    height: '400px',
    marginTop: '-120px'
  };

  if (admin) {
    return <Redirect to="/admin" />
  } 
  
  if(localStorage.getItem('userEmail') && isLoaded(auth)) {
    return           <Redirect to="/lk" />

  }

  return (

    <div className="card">
      <header>
        <Menu /><br />
      </header>

      {(!isEmpty(auth) && isLoaded(auth)) && (
        <div>
          <Redirect to="/lk" />
        </div>
      )}
      <div style={divStyle}>


        {log}

        {isEmpty(auth) &&
          (<a href='#' hidden={false} onClick={handleClick}>
            {title}
          </a>)}
      </div> 
      
    </div>

  )

}