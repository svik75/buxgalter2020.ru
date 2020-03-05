import React, { useState } from 'react';
import { useFirebase, useFirestore } from "react-redux-firebase";



export default function  Register (){
    const firebase = useFirebase();
    const firestore = useFirestore();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
      const onSubmit = (event) => {
      event.preventDefault();
    
       const reg =  firebase.auth().createUserWithEmailAndPassword(email, password);
       firestore.collection('reqs').add({email: email});
       firestore.collection('users').add({email: email, admin: false});

       if(reg) {alert('Вы успешно зарегистрированы!');}
    
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
              <h5>Регистрация</h5>
              <div className="fields">
                <div className="field half">
                  <input type="email" className="form-control"  placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="field half">
                  <input type="password" className="form-control"  placeholder="Пароль" onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <br/>
                <button type="submit" value="Отправить" className="primary" disabled={!(password.length && email.length)} >Регистрация</button>
              </div>
            </div>
          </form>
    </div>
        )
      
  }