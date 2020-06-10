import React,{useEffect} from 'react';
import {Radio} from 'antd-mobile'
const RadioItem = Radio.RadioItem;

function Radios(props) {

    useEffect(()=>{

    })

    function onChange(e) {
        props.onChange(e);
    }

    return (
        <RadioItem {...props} onChange={onChange}>{props.label}</RadioItem>
    );
}

export default Radios;
