import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {inject,observer} from "mobx-react";
import DocumentTitle from "react-document-title";
import App from './App';
import Dashboard from './pages/dashboard/index'
import LoginPage from './pages/auth/login/index';
import Registered from './pages/auth/registered/index';
import NoFound from './pages/auth/noFound/index'
let Page = inject("appState")(observer((props=>{
    const [isLogin,setIsLogin] = useState(false);
    return (
        <Router>
            {isLogin?<Switch>
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
})))

export default Page
