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

                <h1>Консультации</h1>
                <span ><img src="images/pic09.jpg" className="imagep" alt="" /></span>
                <div>

                <p>Мы оказываем консультационные услуги по ведению бухгалтерского и налогового учета в НКО, ООО, ИП. Вы можете получить у нас ответ как правильно сформировать бухгалтерские проводки, заполнить первичные учетные документы, заполнить отчеты, получить ответы на другие вопросы.</p>
                <p>В юридическую консультацию входит консультационная помощь в прохождении проверок контролирующих органов, юридический анализ документов, консультации по регистрации или внесении изменений в уставные документы.</p>
                <p>В случае необходимости наши юристы готовы представить ваши интересы во время проверок контролирующими органами, в судах, в  ФНС, ПФР, Роспотребнадзоре и других органах.</p>
                <div style={tStyle}>
                        <table>
                            <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Консультация для наших клиентов</td><td>бесплатно</td>
                            </tr>
                            <tr>
                                <td>Консультация по телефону</td><td>1 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Консультация по ведению бухгалтерского или налогового учета</td><td>3 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Юридическая консультация</td><td>5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Представление интересов во время проверок и в суде</td><td>от 15 000 руб.</td>
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

