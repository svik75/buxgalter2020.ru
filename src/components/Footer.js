import React, { useState} from 'react';
import { useFirestore } from "react-redux-firebase";

export default function Footer() {
const firestore = useFirestore();
    
    const [uname, setUname] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
  
  // ------------------------------------------
  const onSubmit = (e) => {
    e.preventDefault();

   // const { uname, phone, message } = this.state;
   const date = new Date();
   const status = false;
   const obj = {status: status, date: date, name: uname, phone: phone, message: message};
  const retF = firestore.collection('claims').add(obj );
  if(retF) {alert('Ваше сообщение отправлено!');}
  setPhone(''); setUname(''); setMessage('');

  }
  // -----------------------------------------------------------------------
    return (
      <footer id="footer">
        <div className="inner">
          <section>
            <h2>Задайте нам вопрос</h2>
            <form onSubmit={onSubmit} >
              <div className="fields">
                <div className="field half">
                  <input type="text" className="form-control"   placeholder="Имя" onChange={(e)=>setUname(e.target.value)}/>
                </div>
                <div className="field half">
                  <input type="text" className="form-control"  placeholder="Телефон" onChange={(e)=>setPhone(e.target.value)}/>
                </div>
                <div className="field">
                  <textarea  className="form-control" placeholder="Сообщение" onChange={(e)=>setMessage(e.target.value)}></textarea>
                </div>
              </div>
              <ul className="actions">
                <li><input type="submit" value="Отправить" className="primary" disabled={!(phone !== '' && uname !== '' && message !== '')}/></li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Контакты</h2>
            <ul className="icons">
              <li><a href="/" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
              <li><a href="/" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
              <li><a href="/" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
              <li><a href="tel:74993977513" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
              <li><a href="mailto:bux@buxgalter2020.ru.ru?subject=Вопрос по бухучету" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
            </ul>
          </section>
          <ul className="copyright">
            <li>&copy; Webprog.club 2020. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
    )
  }


