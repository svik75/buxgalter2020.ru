import React, { useState } from 'react';
import { useFirebase } from "react-redux-firebase";
import { Redirect } from 'react-router-dom';


export default function Logout() {
    const [out, setOut] = useState(false);
    const firebase = useFirebase();

    const onSubmit = () => {

        firebase.auth().signOut();
        localStorage.setItem('userEmail', null);
        localStorage.setItem('admin', false);

        setOut (true);
    }

    // -------------------------------------------------

    if (out) {
        return <Redirect to="/" />
    }

    return (
        <form onSubmit={onSubmit} className="center">
            <div className="container">
        <p >Нажмите для выхода</p> 
                <div className="fields">
                    <button type="submit" value="Отправить" className="primary"  >Выход</button>
                </div>
            </div>

        </form>

    )

}