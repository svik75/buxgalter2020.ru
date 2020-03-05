import React, { Component } from 'react';
import CallMissed from '@material-ui/icons/CallSharp';
import CallBack from '../CallBack';
import Menu from '../Menu';



export default class Description extends Component {

    render() {
        const tStyle = {
            width: '60%',
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
        const imgStyle = {
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '50%',
            borderRadius: '8px'
        };
        const divStyle = {

            aligment: 'center',
            margin: '30px',
            padding: '30px'
        };
        const divJustify = {

            textAlign: 'justify'
        };
        return (

            <div style={divStyle}>
            <div className="inner">
            <Menu/>

                <h1>Подключение к 1С Отчетности</h1>
                <span className="image main"><img style={imgStyle} src="images/pic07.jpg" alt="" /></span>
                <div style={divJustify}>

                <p>Всю отчетность можно сдавать из 1С. Для этого необходимо прямо из 1С сформировать заявление на подключение.</p>
                <p>После отправки заявления на подключения сообщите нам ИНН и КПП вашей организации.</p>
                <p>Для активации подключения необходимо явиться к нам в офис директору с паспортом и предоставить решение о его назначении.</p>
                <div style={tStyle}>
                        <table >
                            <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Подключение только направления ФНС</td><td> 1 200 руб.</td>
                            </tr>
                            <tr>
                                <td>Подключение всех направлений (ФНС, ПФР, Росстат, ФСС и т.п.)</td><td>5 900 руб.</td>
                            </tr>
                            
                            </tbody>
                        </table>
                        </div></div>
                        <br/>
                        <a className="center red-text" href="tel:74993977513">Позвоните нам <CallMissed /> +74993977513</a>
                        <br/>
                    <p>или</p>
                    <CallBack />
            </div>
            
        </div>
        );
    }
}

