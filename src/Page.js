import React, {useEffect, useState} from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {inject,observer} from 'mobx-react'
import App from './App';
import Dashboard from './pages/dashboard/index'
import routesConfig from './routes/config';
import AllComponents from './pages';
import queryString from "query-string";
import DocumentTitle from "react-document-title";

let Page = inject("appState")(observer((props=>{

    useEffect(()=>{

    })
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/app/dashboard/index"  component={(props)=><Dashboard {...props}/>} push />} />
                <Route path="/app" component={(props)=><App {...props}/>} />
                {routesConfig.others.map(item=>{
                    const Component = AllComponents[item.component];
                    return <Route key={item.key} path={item.key} render={(props)=> {
                        const reg = /\?\S*/g;
                        // 匹配?及其以后字符串
                        const queryParams = window.location.hash.match(reg);
                        // 去除?的参数
                        const { params } = props.match;
                        Object.keys(params).forEach(key => {
                            params[key] =
                                params[key] && params[key].replace(reg, '');
                        });
                        props.match.params = { ...params };
                        const merge = {
                            ...props,
                            query: queryParams
                                ? queryString.parse(queryParams[0])
                                : {},
                        };
                        // 重新包装组件
                        const wrappedComponent = (
                            <DocumentTitle title={item.title}>
                                <Component {...merge} />
                            </DocumentTitle>
                        );
                        return wrappedComponent
                    }
                    }/>
                })}
                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        </Router>
    );
})))
export default Page
