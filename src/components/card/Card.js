import React, {useContext} from 'react';
import CardContent from './CardContent'
import {Context} from '../../App'
function Card(props) {
    const count = useContext(Context);
    return (
        <div>
           <p>头部:{count}</p>
            <CardContent/>
        </div>
    );
}

export default Card;
