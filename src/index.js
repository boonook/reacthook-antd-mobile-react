import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import { BrowserRouter } from 'react-router-dom';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import appState from './store'
import './index.less';
import 'antd-mobile/dist/antd-mobile.css';
ReactDOM.render(
    <Provider appState={appState}>
        <BrowserRouter>
            <Page />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
serviceWorker.register();
