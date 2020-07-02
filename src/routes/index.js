import React,{Component} from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import queryString from 'query-string';
import routesConfig from './config';
import AllComponents from '@src/pages';
import {observer,inject} from 'mobx-react';

@inject('appState') @observer
class CRouter extends Component {
    requireLogin =(component)=>{
        // this.props.history.listen(()=>{})
        // const isLogin = this.props.appState.userState.isLogin||false;
        // if(isLogin+''==='false'){
        //     return <Redirect to={'/login'}/>
        // }
        return component;
    }

    render(){
        return (
            <Switch>
                {Object.keys(routesConfig).map(key=>
                    routesConfig[key].map(r=>{
                        const route = r =>{
                            const Component = AllComponents[r.component];
                            return (
                                <Route key={r.route||r.key}
                                    exact
                                    path={r.route||r.key}
                                    render={props =>{
                                        const reg = /\?\S*/g;
                                        // 匹配?及其以后字符串
                                        const queryParams = window.location.hash.match(reg);
                                        // 去除?的参数
                                        const {params} = props.match;
                                        Object.keys(params).forEach(key => {
                                            params[key] =
                                                params[key] && params[key].replace(reg, '');
                                        });
                                        props.match.params = {...params};
                                        const merge = {
                                            ...props,
                                            query: queryParams
                                                ? queryString.parse(queryParams[0])
                                                : {},
                                        };
                                        // 重新包装组件
                                        const wrappedComponent = (
                                            <DocumentTitle title={r.title}>
                                                <Component {...merge} />
                                            </DocumentTitle>
                                        );
                                        return r.login?wrappedComponent:this.requireLogin(wrappedComponent,r.auth)
                                    }}
                                />
                            )
                        };
                        return r.component?route(r):r.subs.map(r=>route(r))
                    })
                )}
                <Route render={() => <Redirect to="/404"/>}/>
            </Switch>
        );
    }
}

export default CRouter;
