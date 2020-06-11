import React from 'react';
import './registered.less';
import {inject, observer} from "mobx-react";

let Registered = inject("appState")(observer((props=>{

    return (
        <div className={'noFound'}>
            <h1 className={'noFoundTitle'}>注册</h1>
        </div>
    );
})))

export default Registered;
