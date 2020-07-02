import React from 'react';
import LazyLoad from 'react-lazyload';
function Radios(props) {
    return (
            <LazyLoad {...props}>
                <img {...props} src={props.src} />
            </LazyLoad>
    );
}

export default Radios;
