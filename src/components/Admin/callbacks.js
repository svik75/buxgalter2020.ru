import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty, useFirestore } from 'react-redux-firebase';
import BlockLoading from 'react-loadingg/lib/BlockLoading';


export default function CallBacks() {
  const firestore = useFirestore();
  useFirestoreConnect('callback'); // sync todos collection from Firestore into redux
  let todos =[];
  todos = useSelector(state => state.firestore.data.callback);
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
    No entry
  </div>
}
if(!isEmpty(todos) && isLoaded(todos)) {
  return (
    <div style={tStyle}>
      <h2>Заявки на обратный звонок</h2>
      <table><thead>
        <tr>
          <th>Дата</th><th>Телефонный номер</th><th>Обработан?</th>
        </tr>
      </thead>
      <tbody>
      {Object.keys(todos).map((key, id) => 
      <tr key={key}><td >{ timestampToDate(todos[key].date).toString()}</td><td>{todos[key].phone}</td><td>{todos[key].status ? 'да': 'нет'}</td>
{!todos[key].status ? <td><input type="button" className="primary" value="Завершить" onClick={() => firestore.update(`callback/${key}`, { status: true })}/></td> : <td></td>}</tr>
  )} 
  </tbody>
  </table>
      </div>
  )
}}