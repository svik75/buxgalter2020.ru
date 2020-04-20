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

                <h1>Сдача отчетов ООО и ИП</h1>
                <span ><img src="images/pic05.jpg" className="imagep" alt="" /></span>
                <div>

                <p>Организации и ИП на ОСНО сдают ежеквартально декларацию НДС, по налогу на прибыль. По сотрудникам ежемесячно - СЗВ-М, ежеквартально - расчет по страховым взносам, 6-НДФЛ, 4-ФСС. Ежегодно сдается отчет о среднесписочной численности, Бухгалтерский баланс (Форма №1), отчет о прибылях и убытках (Форма №2), декларация по НДС, декларация по налогу на прибыль.</p>
                <p>Организации и ИП на УСН сдают один раз в год декларацию по УСН, но при этом обязаны вести книгу доходов и расходов. В случае наличия в штате сотрудников перечень отчетов для сдачи такой же как и для ОСНО. </p>
                <p>Мы сможем оперативно на основании ваших данных сформировать и сдать правильную отчетность. При необходимости у нас есть услуга восстановления бухгалтерского учета.</p>
                <div>
            <table style={tStyle}>
                <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                           </thead>
                           <tbody>
                            <tr>
                                <td>Отчетность ООО или ИП на УСН без сотрудников</td><td>От 3 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность ООО или ИП на ОСНО без сотрудников</td><td>От 4 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность ООО или ИП на  УСН с сотрудниками</td><td>От 5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность ООО или ИП на ОСНО с сотрудниками</td><td>От 6 000 руб.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
        </div>
        <br/>
        
        <CallBack />
        </div> </div>
        );
    }
}

