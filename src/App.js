import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import './assets/css/main.css';
import Home from './components/Home';
import Admin from './components/Admin/Admin';
import 'firebase/auth';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Description1 from './components/Descriptions/Description1';
import Description2 from './components/Descriptions/Description2';
import Description3 from './components/Descriptions/Description3';
import Description4 from './components/Descriptions/Description4';
import Description5 from './components/Descriptions/Description5';
import Description6 from './components/Descriptions/Description6';
import Description7 from './components/Descriptions/Description7';
import Description8 from './components/Descriptions/Description8';
import Description9 from './components/Descriptions/Description9';
import Auth from './components/Auth/Auth';
import Callbacks from './components/Admin/callbacks';
import Users from './components/Admin/users';
import Questions from './components/Admin/questions';
import { isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import ResponsiveDrawerUser from './components/Auth/lk';
import Logout from './components/Auth/Logout';
import Helmet from 'react-helmet';




class App extends Component {

  checkLogin() {
    const auth = useSelector(state => state.firebase.auth);
    console.log(' check login');
    if (isEmpty(auth)) {
      this.history.replace('/');
    } else {
        this.history.replace('/admin');

    }
  }
  render() {
    const { history } = this.props;

    return (
      <BrowserRouter>
      <div className="App">
      <Helmet>
        <title>Buxgalter2020.ru - Бухгалтер на аутсорсинг, сдача отчетности, ЭЦП</title>
        <meta name="description" content="Ведение бухучета НКО ООО ИП в Москве и области" />
        <meta name="keywords" content="бухгалтер отчетность ЭЦП" />
        <meta name="yandex-verification" content="39cfac5b4238a0d9" />
      </Helmet>
        <Switch >
          <Route history={history} path='/home' component={Home} />
          <Route history={history} path='/about' component={About} />
          <Route history={history} path='/auth' component={Auth} />
          <Route history={history} path='/logout' component={Logout} />

          <Route history={history} path='/admin' component={Admin} onEnter={this.checkLogin} />
          <Route history={history} path='/lk' component={ResponsiveDrawerUser} onEnter={this.checkLogin} />
          <Route history={history} path='/description1' component={Description1} />
          <Route history={history} path='/description2' component={Description2} />
          <Route history={history} path='/description3' component={Description3} />
          <Route history={history} path='/description4' component={Description4} />
          <Route history={history} path='/description5' component={Description5} />
          <Route history={history} path='/description6' component={Description6} />
          <Route history={history} path='/description7' component={Description7} />
          <Route history={history} path='/description8' component={Description8} />
          <Route history={history} path='/description9' component={Description9} />
          <Route history={history} path="/admin/callbacks" Component={Callbacks} />
          <Route history={history} path="/admin/users" Component={Users} />
          <Route history={history} path="/admin/questions" Component={Questions} />
          <Redirect from='*' to='/home' />
        </Switch>
      </div>
</BrowserRouter>
    );
  }
}

export default withRouter(App);
