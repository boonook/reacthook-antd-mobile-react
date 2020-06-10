import React,{useEffect} from 'react';
import { Route, Switch,Redirect } from 'react-router-dom';
import DocumentTitle from 'react-document-title';
import queryString from 'query-string';
import routesConfig from './config';
import AllComponents from '../pages';

function CRouter() {
    useEffect(()=>{
    })
    return (
            <Switch>
                {routesConfig.menus.map(item=>{
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
    );
}

export default CRouter;
