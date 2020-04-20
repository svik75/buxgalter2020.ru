import React from 'react';
import Menu from './Menu';


export default class About extends React.Component{
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    render(){
        const tStyle = {
            width: '100%',
            margin: 'auto',
            th: {
                fontWeight: 'normal',
                color: '#039',
                padding: '10px 15px',
                borderBottom: '1px solid #ddd'

              },
              tableData: {
                color: '#669',
                borderTop: '1px solid #e8edff',
                padding: '10px 15px',
                borderBottom: '1px solid #ddd'

              }
        };
        
        const divStyle = {

            aligment: 'center',
            
        };
        
        return  (
            <div style={divStyle}>
        <div className="inner">
        <Menu />

            <h1>О нас</h1>
            <span ><img  src="images/about.jpg" className="imagep" alt="" /></span>
            <div>

            <p>Наша компания существует с 2012 года. За эти годы мы сдали тысячи отчетов, вели бухгалтерский и налоговый учет тысяч компаний. </p>
            <p>Наша миссия - помощь малому бизнесу в грамотном ведении бухгалтерского учета и сдаче отчетности за приемлемые деньги. Именно отсутствие ошибок при ведении бухучета и заполнении отчетности приводит к нам новых клиентов по рекомендации. </p>
            <p>В какой бы услуге вы ни нуждались, мы всегда стараемся сделать все возможное для качественного оказания услуги.</p>
            <div style={tStyle}>
                <h5 className="center">Наши реквизиты</h5>
                        <table >
                            <tr>
                                <td>ОГРН</td><td>1127746516336</td>
                            </tr>
                            <tr>
                                <td>ИНН</td><td>7728812441</td>
                            </tr>
                            <tr>
                                <td>КПП</td><td>772801001</td>
                            </tr>
                            <tr>
                                <td>Дата регистрации</td><td>04 июля 2012 г.</td>
                            </tr>
                            <tr>
                                <td>Юридический адрес</td><td>117593, город Москва, улица Айвазовского, 3 стр.1, офис 1</td>
                            </tr>
                            <tr>
                                <td>Расчетный счет</td><td>40702810238000239064</td>
                            </tr>
                            <tr>
                                <td>Наименование банка</td><td>ПАО Сбербанк г. Москва</td>
                            </tr>
                            <tr>
                                <td>Электронная почта</td><td>bux@buxgalter2020.ru</td>
                            </tr>
                            <tr>
                                <td>Телефон</td><td>+7 (499) 397-75-13</td>
                            </tr>
                        </table>
                        </div></div>
                    
            </div>
            </div>
       
    );
    }
  } 