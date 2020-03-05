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

                <h1>Сдача отчетности некоммерческих организаций</h1>
                <span className="image main"><img style={imgStyle} src="images/pic04.jpg" alt="" /></span>
                <div style={divJustify}>

                <p>Все некоммерческие организации обязаны вести бухгалтерский учет и сдавать один раз в год бухгалтерский баланс НКО (форма №1),  отчет подтверждающий целевое расходование средств (форма №6). Некоторые НКО сдают отчет о финансовых результатах. Срок сдачи годовой отчетности - до 1 апреля. </p>
                <p>Также НКО обязаны ежегодно сдавать отчетность в Министерство Юстиции РФ. Предоставление отчетов в Минюст подтверждает намерение НКО работать в текущем году. Отчетность предоставляется до 15 апреля. Не предоставление отчетности в МинЮст приведет к исключению НКО из реестра.</p>
                <p>Некоммерческие организации сдают налоговую отчетность. В случае работы на ОСНО сдается декларация по налогу на прибыль и НДС. На УСН сдается декларация один раз в год.</p>
                <p>При наличии сотрудников ежемесячно сдается СЗВ-М, ежеквартально расчет по страховым взносам, 6-НДФЛ, 4-ФСС </p>
                <p>Некоммерческие организации сдают отчетность в Росстат. Форма №1-НКО, форма №11, 1-СОНКО сдается до 1 апреля. </p>
                <p>Некоммерческие организации сдают экологическую отчетность в Росприроднадзор, ЦБ Р.Ф</p>
                <p>Обращайтесь к нам и мы сформируем и сдадим любые отчеты.</p>

            <div>
            <table style={tStyle}>
                <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>Отчетность НКО на УСН без сотрудников</td><td>От 3 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО на ОСНО без сотрудников</td><td>От 4 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО на  УСН с сотрудниками</td><td>От 5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО на ОСНО с сотрудниками</td><td>От 5 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО в МинЮст</td><td>От 1 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО в Росприроднадзор</td><td>От 2 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Отчетность НКО в ЦБ РФ</td><td>От 5 000 руб.</td>
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
        </div> </div>
        );
    }
}
