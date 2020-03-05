import React, { Component } from 'react';
import Menu from './Menu';
import Article from './Article';
import Header from './Header';
import Footer from './Footer';
import '../assets/css/main.css';
import CallMissed from '@material-ui/icons/CallSharp';


export default class Home extends Component {
 

  checkLogin() {
    const login = window.localStorage.getItem('userEmail')
    if (login === null) {
      this.props.hystory.push('/');
    } else {
        this.props.hystory.push('/admin');

    }
    
  }
  render() {
    return (
      <div className="is-preload"><br/> <Menu />
        <div id="wrapper">
          
        <a className="center red-text" href="tel:74993977513"> <CallMissed /> +74993977513</a>
        <br/>
          <header id="header">
             

            <div className="inner">
              <a href="/" className="logo">
                <span className="symbol"><img src="images/logo.svg" alt="" /></span>
                <span className="title">ООО "Гарант Консалтинг"</span>
              </a>
            </div>
          </header>

          <div id="main">
            <div className="inner">
              <Header />
              <section className="tiles">
                <Article title="Ведение учета НКО" description="Мы ведем бухгалтерский и налоговый учет НКО" imgSrc="images/pic01.jpg" styleA="style1" descriptionPath='/description1'/>
                <Article title="Ведение учета ООО" description="Мы ведем бухгалтерский и налоговый учет ООО" imgSrc="images/pic02.jpg" styleA="style2" descriptionPath='/description2' />
                <Article title="Ведение учета ИП" description="Мы ведем бухгалтерский и налоговый учет  ИП" imgSrc="images/pic03.jpg" styleA="style3" descriptionPath='/description3'/>
                <Article title="Сдача отчетов НКО" description="Подготовим и сдадим отчеты НКО" imgSrc="images/pic04.jpg" styleA="style4" descriptionPath='/description4'/>
                <Article title="Сдача отчетов ООО и ИП" description="Подготовим и сдадим отчеты ООО и ИП" imgSrc="images/pic05.jpg" styleA="style5" descriptionPath='/description5'/>
                <Article title="Сдача нулевых отчетов" description="Подготовим и сдадим отчеты любых организаций" imgSrc="images/pic06.jpg" styleA="style6" descriptionPath='/description6'/>
                <Article title="Подключение к 1С Отчетности" description="Подключим вашу 1С к электронной отчетности" imgSrc="images/pic07.jpg" styleA="style1" descriptionPath='/description7'/>
                <Article title="Подключение к Астрал-Отчет" description="Сдавайте отчетность в электронном виде через веб браузер" imgSrc="images/pic08.jpg" styleA="style2" descriptionPath='/description8'/>
                <Article title="Консультации" description="Получите юридическую или бухгалтерскую консультацию" imgSrc="images/pic09.jpg" styleA="style3" descriptionPath='/description9'/>
              </section>
            </div> 
           
          </div>
         
        <Footer />
        </div> 
      </div>
      
    );
  }
}

