import React,{useContext,useEffect} from 'react';
import {Context} from '../../App'
function CardContent(props) {
    const count = useContext(Context);
    useEffect(()=>{

    })
    return (
        <div>
            <p>内容:{count}</p>
        </div>
    );
}

export default CardContent;
