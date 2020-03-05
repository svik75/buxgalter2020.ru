import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty, useFirestore } from 'react-redux-firebase';
import BlockLoading from 'react-loadingg/lib/BlockLoading';

export default function AdmQueries() {

 const firestore=useFirestore();

 useFirestoreConnect([
   { collection: 'contracts' } // or 'todos'
 ])
 const todos = useSelector(state => state.firestore.data.contracts);
 
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

// ---------------------------------------- 
const timestampToDate = (ts) => {
  var  year = ts.toDate().getFullYear();
  var month= ts.toDate().getMonth() + 1;
  var day= ts.toDate().getDate();
  return day+'.'+month+'.'+year;
}
// ----------------------------------------

 if(!isLoaded(todos)) {
  return <BlockLoading />
}

if(isEmpty(todos)) {
  return <div>
    Запросов пока нет
  </div>
}

if(!isEmpty(todos) && isLoaded(todos)) {

 return (
<div >
      
        <h5 className="center">Запросы от клиентов</h5>
        <table style={tStyle}>
          <thead>
        <tr>
          <th>Дата</th><th>Email</th><th>Запрос</th><th>Статус</th>
        </tr>
      </thead>
      <tbody>
       {Object.keys(todos).map((key, id) => 
      <tr key={key}><td>{timestampToDate(todos[key].date)}</td><td >{todos[key].email}</td><td>{todos[key].question}</td><td>{todos[key].done ? 'Выполнено' : 'В работе'}</td>
{todos[key].done ? <td></td> : <td><input type="button" className="primary" value="Завершить" onClick={() => firestore.update(`contracts/${key}`, { done: true })}/></td>}</tr>
  )} 
</tbody>
       </table>
    </div>
 )
}


}