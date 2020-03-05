import React, { Component } from 'react';
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

                <h1>Подключение к Астрал-Отчетности</h1>
                <span className="image main"><img style={imgStyle} src="images/pic08.jpg" alt="" /></span>
                <div style={divJustify}>

                <p>С Астрал Отчетом вы сможете сдавать отчетность в любой контролирующий орган.</p>
                <p><b>Персональная доска задач. </b>На главной странице вы сможете отправить отчет, получить требование и ответить на него.</p>
                <p><b>Умный редактор отчетов. </b>Интерактивные подсказки помогут без ошибок заполнить и сдать отчеты. Новая система работы с требованиями не даст Вам пропустить время ответа, автоматически отправив подтверждение о получении.</p>
                <p><b>Все организации под рукой. </b>Сервис позволит вести сразу несколько компаний и переключаться между ними даже во время заполнения отчета.</p>
                <p><b>Мгновенное взаимодействие с контролирующими органами. </b>Благодаря современным технологиям разработки и хранения информации на наших серверах в облаке, обмен информацией становится в разы быстрее.</p>
                <p><b>Проверка отчетности в режиме реального времени. </b>Сервис проверит правильность заполнения отчета, укажет ошибки, их количество и поможет быстро внести исправления с помощью встроенной системы навигации по ним.</p>
                <p><b>Массовый импорт отчетности, подготовленной в других программах. </b>Максимально быстрый импорт и отправка отчетности в неограниченном количестве и сразу по всем организациям. Система Drag-and-drop позволяет просто “перетащить” все файлы в открытую вкладку браузера или загрузить их с помощью кнопки “Добавить документ”.</p>
                <p><b>Неформализованный документооборот. </b>Обменивайтесь неформализованными документами с ФНС, ПФР и Росстатом. Получайте рассылки от контролирующих органов и отправляйте ответные письма с вложениями любого формата.</p>
                <div>
            <table style={tStyle}>
                <thead>
                            <tr>
                                <th>Услуга</th><th>Стоимость</th>
                            </tr>
                            </thead>
                            <tbody>
                           <tr>
                                <td>Юридическое лицо - все направления</td><td>5 900 руб.</td>
                            </tr>
                            <tr>
                                <td>Индивидуальный предприниматель - все направления</td><td>От 2 200 руб.</td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
        </div>
        <br/>
        <p>Нажмите на баннер ниже, зарегистрируйтесь и отправьте заявление на подключение. После проверки ваших документов и идентификации директора вы сразу сможете работать с Астрал-Отчетностью.</p>
        <br/>
        <div><a href="https://ao.astral.ru/?officeGuid=4a1be33a-695a-471c-819d-24b224bce557">
                    <img src="https://partner.astral.ru/build/banners/HeaderBanner.svg" alt="Подключиться" /></a></div>
        </div> 
        <br/>
        <CallBack />
        </div>               
           
        );
    }
}
