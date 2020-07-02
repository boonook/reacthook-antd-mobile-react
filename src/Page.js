import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {inject,observer} from "mobx-react";
import DocumentTitle from "react-document-title";
import App from '@src/App';
import Dashboard from '@src/pages/dashboard/index'
import LoginPage from '@src/pages/auth/login/index';
import Registered from '@src/pages/auth/registered/index';
import NoFound from '@src/pages/auth/noFound/index'

@inject('appState') @observer
class Page extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            isLogin:true
        }
    }
    render() {
        return (
            <Router>
                {this.state.isLogin?<Switch>
                    <Route exact path="/" render={() => <Redirect to="/app/dashboard/index"  component={(props)=><Dashboard {...props}/>} push />} />
                    <Route path="/app" component={(props)=><App {...props}/>} />
                    <Route path="/404" component={(props)=><DocumentTitle title={'404'}><NoFound {...props}/></DocumentTitle>} />
                    <Route render={() => <Redirect to="/404" />} />
                </Switch>: <Switch>
                    <Route exact path="/" render={() => <Redirect to="/login"  component={(props)=><DocumentTitle title={'登录'}><LoginPage {...props}/></DocumentTitle>}/>} />
                    <Route path="/login" component={(props)=><DocumentTitle title={'登录'}><LoginPage {...props}/></DocumentTitle>} />
                    <Route path="/registered" component={(props)=><DocumentTitle title={'注册'}><Registered {...props}/></DocumentTitle>} />
                    <Route path="/404" component={(props)=><DocumentTitle title={'404'}><NoFound {...props}/></DocumentTitle>} />
                    <Route render={() => <Redirect to="/404" />} />
                </Switch>}
            </Router>
        );
    }
}

export default Page
