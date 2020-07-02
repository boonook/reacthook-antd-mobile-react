import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react'
import { BrowserRouter } from 'react-router-dom';
import appState from '@src/store'
import Page from '@src/Page';
import * as serviceWorker from '@src/serviceWorker';
import '@src/index.less';
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
