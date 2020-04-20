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
            aligment: 'left',
            th: {
                fontWeight: 'bold',
                color: '#039',
                padding: '10px 15px',
                borderBottom: '1px solid #ddd'

              },
              td: {
                fontWeight: 'normal',
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

                <h1>Сдача нулевых отчетов</h1>
                <span ><img  src="images/pic06.jpg" className="imagep" alt="" /></span>
                <div>

                <p>Каждая организация или ИП должны сдавать нулевую отчетность не смотря на то, что они не ведут деятельность. У коммерческих и некоммерческих организаций, ИП - свой перечень необходимых нулевых отчетов. </p>
                <p>Не сдача отчетности приведет к штрафу или исключению организации из ЕГРЮЛ (ЕГРИП). В настоящий момент не сдача отчета о среднесписочной численности служит основанием для исключения организации из ЕГРЮЛ.</p>
                <p>Обращайтесь к нам и мы сформируем необходимый пакет нулевой отчетности для сдачи, даже если все сроки на сдачу отчетности уже прошли.</p>
                <div>
            <table style={tStyle}>
                <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                           <tr>
                                <td>Нулевая отчетность НКО</td><td>От 5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Нулевая отчетность ООО на УСН</td><td>От 2 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Нулевая отчетность ООО на ОСНО</td><td>От 4 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Нулевая отчетность ИП</td><td>От 2 000 руб.</td>
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

