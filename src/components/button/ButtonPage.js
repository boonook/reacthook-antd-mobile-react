import React,{useEffect,useState} from 'react';

function ButtonPage(props) {
    const [title,setTitle] = useState('按钮')

    useEffect(()=>{
        /**
         * 在useEffect中使用了useState则会导致无限循环，这样显然是影响性能的。为了处理这个问题，我们可以给useEffect传第二个参数。用第二个参数来告诉react只有当这个参数的值发生改变时，才执行我们传的副作用函数
         * **/
        setTitle(props.title);
    },[title])

    function onBtn() {
        props.on_click('add');
    }

    return (
        <div>
           <button onClick={onBtn}>{title}</button>
        </div>
    );
}

export default ButtonPage;
