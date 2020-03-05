import React from 'react'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'

export default function Docs() {
 useFirestoreConnect([
   { collection: 'users' } // or 'todos'
 ])
 // const todos = useSelector(state => state.firestore.ordered.todos);

 return (

    <div>
        <h5>В разработке...</h5>
       
    </div>
 )
}