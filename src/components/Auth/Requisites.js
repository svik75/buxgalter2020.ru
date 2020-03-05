import React, { useState, useEffect } from 'react';
import { useFirestoreConnect, isLoaded, useFirestore } from "react-redux-firebase";
import { useSelector } from 'react-redux';



export default function Reqs() {
  const firestore = useFirestore();
  
  let obj = { cName: '', inn: '', kpp: '', ogrn: '', accnum: '', bank: '', bik: '', cacc: '', uraddr: '', phone: '', ceo: '' };
  let key = null;
  let todos = useSelector(state => state.firestore.data.reqs);
  useFirestoreConnect('reqs');
  const userEmail = localStorage.getItem('userEmail');

  const [cname, setCname] = useState('');
  const [inn, setInn] = useState('');
  const [kpp, setKpp] = useState('');
  const [ogrn, setOgrn] = useState('');
  const [accNum, setAccNum] = useState('');
  const [bank, setBank] = useState('');
  const [bik, setBik] = useState('');
  const [cacc, setCacc] = useState('');
  const [uraddr, setUraddr] = useState('');
  const [phone, setPhone] = useState('');
  const [ceo, setCeo] = useState('');

  useEffect(() => {
    if (isLoaded(todos) && userEmail !== null) {
      Object.keys(todos).map(k => {
        if (todos[k].email === userEmail) { obj = (todos[k]); key = k; };
      });
    };
    if (!cname) { setCname(obj.cName ? obj.cName : ''); }
    if (!inn) { setInn(obj.inn ? obj.inn : ''); }
    if (!kpp) { setKpp(obj.kpp ? obj.kpp : ''); }
    if (!ogrn) { setOgrn(obj.ogrn ? obj.ogrn : ''); }
    if (!accNum) { setAccNum(obj.accnum ? obj.accnum : ''); }
    if (!bank) { setBank(obj.bank ? obj.bank : ''); }
    if (!bik) { setBik(obj.bik ? obj.bik : ''); }
    if (!cacc) { setCacc(obj.cacc ? obj.cacc : ''); }
    if (!uraddr) { setUraddr(obj.uraddr ? obj.uraddr : ''); }
    if (!phone) { setPhone(obj.phone ? obj.phone : ''); }
    if (!ceo) { setCeo(obj.ceo ? obj.ceo : ''); }
  })


  // ---------------------------------------
  const onSubmit = (event) => {
    event.preventDefault();
    const res = firestore.update(`reqs/${key}`, { cName: cname, inn: inn, kpp: kpp, ogrn: ogrn, accnum: accNum, bank: bank, bik: bik, cacc: cacc, uraddr: uraddr, phone: phone, ceo: ceo });
    if (res) { alert('Изменения сохранены'); }

  }
  // -------------------------------------------------
  const divStyle = {
    aligment: 'center',
    margin: '30px',
    padding: '30px',
    width: '80%'
  };



  return (
    <div style={divStyle}>
      <form onSubmit={onSubmit} >
          <h2>Реквизиты</h2>
          <div className="fields">
            <div className="field">
              <input type="text" value={cname} placeholder="Наименование организации" onChange={(e) => { setCname(e.target.value); }} />
            </div>
            <div className="field half">
              <input type="text" value={inn} placeholder="ИНН" onChange={(e) => setInn(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={kpp} placeholder="КПП" onChange={(e) => setKpp(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={ogrn} placeholder="ОГРН" onChange={(e) => setOgrn(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={accNum} placeholder="Счет №" onChange={(e) => setAccNum(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={bank} placeholder="Банк" onChange={(e) => setBank(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={bik} placeholder="БИК" onChange={(e) => setBik(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={cacc} placeholder="Корр счет" onChange={(e) => setCacc(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={uraddr} placeholder="Юридический адрес" onChange={(e) => setUraddr(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={phone} placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="field half">
              <input type="text" value={ceo} placeholder="ФИО директора" onChange={(e) => setCeo(e.target.value)} />
            </div>
            <br />
            <div className="center">
            <button type="submit" className="primary">Сохранить</button>
            </div>
          </div>
      </form>
    </div>
  )

}