import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Dashboard from './pages/dashboard/index'
import DocumentTitle from "react-document-title";
import appState from './store';
import LoginPage from './pages/auth/login/index';
import Registered from './pages/auth/registered/index';
import NoFound from './pages/auth/noFound/index'
function Page(props){
    console.log(appState.userState.isLogin);
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard/index"  component={(props)=><Dashboard {...props}/>} push />} />
                <Route path="/app" component={(props)=><App {...props}/>} />
                <Route path="/login" component={(props)=><DocumentTitle title={'登录'}><LoginPage {...props}/></DocumentTitle>} />
                <Route path="/registered" component={(props)=><DocumentTitle title={'注册'}><Registered {...props}/></DocumentTitle>} />
                <Route path="/404" component={(props)=><DocumentTitle title={'404'}><NoFound {...props}/></DocumentTitle>} />
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </Router>
    );
}

export default Page
