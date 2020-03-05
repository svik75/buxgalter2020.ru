import React, { useState } from 'react';
import { useFirebase,  useFirestoreConnect} from "react-redux-firebase";
import { useSelector } from 'react-redux';




export default function Login() {

  const firebase = useFirebase();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useFirestoreConnect([
    { collection: 'users' } // or 'todos'
  ])
  const todos = useSelector(state => state.firestore.data.users);

  const onSubmit = (event) => {
    event.preventDefault();
    let admin = false;
    const login = firebase.auth().signInWithEmailAndPassword(email, password);
    if(login) {
       localStorage.setItem('userEmail', email);

       Object.keys(todos).map(k => {
        if (todos[k].email === email  && todos[k].admin === true) {
         localStorage.setItem('admin', true); admin=true;};
      });

  } else {
      alert('Войти не удалось!');
    }
    console.log('admin: '+ admin);

  }

  // -------------------------------------------------
  

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
  return (
    <div style={divStyle}>
      <form onSubmit={onSubmit} >
        <div className="container">
          <h5>Вход в личный кабинет</h5>
          <div className="fields">
            <div className="field half">
              <input type="email" className="form-control"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="field half">
              <input type="password" className="form-control"  placeholder="пароль" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <br />
            <button type="submit" value="Отправить" className="primary" disabled={!(password.length && email.length)} >Вход</button>
          </div>
        </div>
      </form>
    </div>
  )

}