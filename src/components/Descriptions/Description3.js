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

                <h1>Ведение учета ИП</h1>
                <span className="image main"><img style={imgStyle} src="images/pic03.jpg" alt="" /></span>
                <div style={divJustify}>

                <p>Согласно п. 2 ст. 54 НК РФ индивидуальные предприниматели, работающие на общей системе налогообложения, учитывают доходы и расходы по своей коммерческой деятельности в книге учета доходов и расходов и хозяйственных операций, утвержденной приказом от 13.08.2002 Минфина России № 86н и МНС России № БГ-3-04/430. Тоже самое касается ИП на упрощенной системе налогообложения.</p>
                <p>В случае наличия наемных сотрудников, индивидуальный предприниматель обязан вести кадровый учет, вести расчет заработной платы, исчислять и уплачивать налоги и сдавать ежемесячную отчетность. В случае торговли ИП обязан вести кассовый учет, уплачивать НДС, транспортный налог и другие.</p>
                <p>К ведению учета индивидуального предпринимателя следует относиться максимально внимательно, ведь индивидуальный предприниматель отвечает перед законом всем своим имуществом.</p>
                <p>Мы готовы взять на аутсорсинг ведение учета индивидуального предпринимателя независимо от вида деятельности, оборотов и количества сотрудников.</p>
               <div >
                        <table style={tStyle}>
                            <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Ведение учета на УСН без сотрудников</td><td>От 5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Ведение учета на без сотрудников</td><td>От 7 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Ведение учета на с сотрудниками</td><td>От 10 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Ведение учета на с сотрудниками</td><td>От 15 000 руб.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
            </div>
            <br/>
            <a className="center red-text" href="tel:74993977513">Позвоните нам <CallMissed /> +74993977513</a>
            <br/>
                    <p>или</p>
                    <CallBack />
        </div></div>
        );
    }
}
