import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty, useFirestore } from 'react-redux-firebase'
import BlockLoading from 'react-loadingg/lib/BlockLoading';

export default function Quieries() {
   const [question, setQuestion] = useState('');
 const userEmail = localStorage.getItem('userEmail');

 useFirestoreConnect([
   { collection: 'contracts' } // or 'todos'
 ])
 const todos = useSelector(state => state.firestore.ordered.contracts);
 const firestore=useFirestore();
 const tStyle = {
  width: '80%',
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
  width: '80%'
};
// ---------------------------------------- 
const timestampToDate = (ts) => {
  var  year = ts.toDate().getFullYear();
  var month= ts.toDate().getMonth() + 1;
  var day= ts.toDate().getDate();
  return day+'.'+month+'.'+year;
}
// ----------------------------------------
const onSubmit = (event) => {
  event.preventDefault();
  const retF = firestore.collection('contracts').add({date: new Date(), email: userEmail, question: question, done: false});

  if (retF) { alert('Запрос добавлен!');
    setQuestion('');
  }
}

 if(!isLoaded(todos)) {
  return <BlockLoading />
}

if(isEmpty(todos)) {
  return <div>
    Запросов пока нет
  </div>
}

if(!isEmpty(todos) && isLoaded(todos)) {
  const obj = Object.values(todos).filter((todo) => todo.email === userEmail);

 return (
<div >
      <form onSubmit={onSubmit} style={divStyle}>
      <input type="text" style={divStyle} placeholder='Напишите текст запроса (поручения)'  onChange={(e)=>setQuestion(e.target.value)}/>
      <input style={divStyle} type="submit" value="Добавить" disabled={!(question.length)}/>
      <br/>
      </form>
        <h5>Ваши запросы</h5>
        <table style={tStyle}>
          <thead>
        <tr>
          <th>Дата</th><th>Запрос</th><th>Статус</th>
        </tr>
      </thead>
      <tbody>
       {obj.map(todos =>  
      <tr ><td>{timestampToDate(todos.date)}</td><td>{todos.question}</td>
<td>{todos.done ? 'Исполнен' : 'На рассмотрении'}</td></tr>
  )} 
</tbody>
       </table>
    </div>
 )
}


}