import React,{useEffect} from 'react';
import {Button} from 'antd-mobile'
function Buttons(props) {

    function onBtn(e) {
        props.onClick(e)
    }
    
    return (
        <Button {...props} onClick={onBtn}>{props.title}</Button>
    );
}

export default Buttons;
