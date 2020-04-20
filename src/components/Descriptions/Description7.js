import React, { Component } from 'react';
import CallBack from '../CallBack';
import Menu from '../Menu';



export default class Description extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render() {
        const tStyle = {
            width: '100%',
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

            aligment: 'center',
            
        };
        
        return (

            <div style={divStyle}>
            <div className="inner">
            <Menu/>

                <h1>Подключение к 1С Отчетности</h1>
                <span ><img src="images/pic07.jpg"className="imagep" alt="" /></span>
                <div>

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
                        
                    <CallBack />
            </div>
            
        </div>
        );
    }
}

