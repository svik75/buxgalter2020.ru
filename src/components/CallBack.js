import React, {  useState } from 'react';
import { useFirestore } from "react-redux-firebase";



export default function CallBack () {
  const firestore = useFirestore();
    const [phone, setPhone] = useState('');
    // eslint-disable-next-line no-unused-vars
   
  
  // ------------------------------------------
  const onSubmit = (e) => {
    e.preventDefault();
   const date = new Date();
   const status = false;
     const fr = firestore.collection('callback').add({date: date, status: status, phone: phone});
      if(fr) {alert('Заявка на обратный звонок отправлена!');}
     fetch('https://legal-msk.ru/api/mailer/send', {
			method: 'POST',
			body: JSON.stringify({
				title: 'Обратный звонок',
				body: `Телефон: ${phone}`
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
				return response.json()
			}).then(json => {
				this.setState({
					user:json
				});
			});
     setPhone(''); 


  }


      let div = {
        left: '50%',
        marginLeft: '-100px',
        position: 'absolute',
        width: '200px'

      };
    
    return (
    
        <div className="center">
            <h5>Закажите обратный звонок</h5>
            <form onSubmit={onSubmit} >
              <div className="center">
                <input type="text"  style={div} className="form-control"  placeholder="Укажите ваш телефон" onChange={(e)=>setPhone(e.target.value)}/>
                <br/>                <br/>

                <input type="submit"  value="Отправить" className="primary" disabled={!phone.length}/>
              </div>
            </form>
          </div>
          
           

    )
  }




