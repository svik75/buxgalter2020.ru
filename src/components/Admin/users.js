import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { BlockLoading } from 'react-loadingg';


export default function Users() {
  const [email, setEmail] = useState('');
  const firestore=useFirestore();
 useFirestoreConnect([
   { collection: 'users' } // or 'todos'
 ])
 const todos = useSelector(state => state.firestore.data.users);

 const onSubmit = (event) => {
  event.preventDefault();
  const retF = firestore.collection('users').add({email: email, admin: false});
  if (retF) { alert('Пользователь добавлен!');
    setEmail('');
  }
}

const tStyle = {
  width: '60%',
  align: 'center',
  margin: 'auto',
  th: {
      fontWeight: 'normal',
      color: '#039',
      padding: '10px 15px',
      borderBottom: '1px solid #ddd'

    },
    td: {
      color: '#669',
      borderTop: '1px solid #e8edff',
      padding: '10px 15px',
      borderBottom: '1px solid #ddd'

    }
};

const divStyle = {
  justifyContent: 'center',
  align: 'center',
  margin: 'auto',
  width: '50%'
};

if(!isLoaded(todos)) {
  return <BlockLoading />
}

if(isEmpty(todos)) {
  return <div>
    Пользователей нет
  </div>
}



 return (

    <div >
      <form onSubmit={onSubmit} style={divStyle}>
      <input type="text" placeholder='Email'  onChange={(e)=>setEmail(e.target.value)}/>
      <input type="submit" value="Добавить" disabled={!(email.length)}/>
      <br/>
      </form>
        <h5>Список пользователей</h5>
        <table style={tStyle}>
          <thead>
        <tr>
          <th>Email</th><th>Администратор?</th>
        </tr>
      </thead>
      <tbody>
       {Object.keys(todos).map((key, id) => 
      <tr key={key}><td >{todos[key].email}</td><td>{todos[key].admin ? 'да': 'нет'}</td>
{todos[key].admin ? <td><input type="button" className="primary" value="Убрать" onClick={() => firestore.update(`users/${key}`, { admin: false })}/></td> : <td><input type="button" className="primary" value="Добавить" onClick={() => firestore.update(`users/${key}`, { admin: true })}/></td>}</tr>
  )} 
</tbody>
       </table>
    </div>
 )
}