import React,{useEffect} from 'react';
import LazyLoad from 'react-lazyload';
function Radios(props) {

    useEffect(()=>{

    })

    return (
            <LazyLoad {...props}>
                <img src={props.src} />
            </LazyLoad>
    );
}

export default Radios;
