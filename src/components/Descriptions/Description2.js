import React, { Component } from 'react';
import CallMissed from '@material-ui/icons/CallSharp';
import Menu from '../Menu';
import CallBack from '../CallBack';

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

                <h1>Ведение учета ООО</h1>
                <span className="image main"><img style={imgStyle} src="images/pic02.jpg" alt="" /></span>
                <div style={divJustify}>
                <p>Все коммерческие компании обязаны вести бухгалтерский учет. .

Ведение бухгалтерского учета в ООО обязанность главного бухгалтера, который назначается его руководителем. На малых предприятиях часто генеральный директор и главный бухгалтер — это одно лицо. Но, учет должен вести профессиональный бухгалтер, ведь не всегда генеральный директор является специалистом в области бухгалтерского и налогового учета. Исключением могут стать спецрежимы, где учет довольно прост и под силу даже непрофессионалу.
Основой бухучета на предприятии является учетная политика. Именно в этом документе прописываются способы и методы ведения учета ООО, подробно фиксируются все нюансы. К учетной политике прилагаются утвержденные бухгалтерские регистры и образцы первичной документации, которую планирует применять в своей деятельности ООО.</p>
                <p>Бухгалтерский и налоговый учет в ООО нужно вести в соответствии с законом «О бухгалтерском учете» от 06.12.2011 № 402-ФЗ и Налоговым кодексом.</p>
                <p>Ведение бухучета можно возложить на аутсорсинговую компанию, заключив с ней договор. Мы готовы полностью взять обязанность по ведению налогового и бухгалтерского учета вашей организации.</p>
                <p>Бухгалтерский учет мы ведем в локальной или облачной версии 1С. В любой момент вы сможете получить доступ к данным бухгалтерского и налогового учета.</p>
                <div style={tStyle}>
                        <table >
                            <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Бучучет УСН без сотрудников</td><td>От 8 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Бучучет ОСНО без сотрудников</td><td>От 10 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Бучучет  УСН с сотрудниками</td><td>От 10 000 руб.</td>
                            </tr>
                            <tr>
                                <td>Бучучет ОСНО с сотрудниками</td><td>От 15 000 руб.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div></div>
                        <br/>
                        <a className="center red-text" href="tel:+74993977513">Позвоните нам <CallMissed /> +74993977513</a>
                        <br/>
                    <p>или</p>
                    <CallBack />
            </div>
            
        </div>
        );
    }
}

