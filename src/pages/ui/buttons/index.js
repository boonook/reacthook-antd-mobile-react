import React,{useEffect,useState} from 'react';
import {ListView} from 'antd-mobile';
import { Link } from 'react-router-dom';
function Buttons(props) {
    const [dataSource,setDataSource] =useState([{},{},{},{},{}]);
    const [loading, setLoading] = useState(true)
    useEffect(()=>{

    })

    function GoodsList(){
        debugger
    }

    return (
        <div>
            <h1>12312</h1>
            {dataSource.map((item,index)=>{
                return <div key={index}>123123</div>
            })}
            {/*<ListView*/}
            {/*    dataSource={dataSource}*/}
            {/*    // 单个卡片组件*/}
            {/*    renderRow={(item)=>(*/}
            {/*        <Link>*/}
            {/*            <div>*/}
            {/*            <ul>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*                <li>123123</li>*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*        </Link>*/}
            {/*    )}*/}
            {/*    initialListSize={10}*/}
            {/*    pageSize={10}*/}
            {/*    renderFooter={()=>(*/}
            {/*        <div style={{ padding: 20, textAlign: 'center' }}>*/}
            {/*            {*/}
            {/*                loading ? '加载中...' : '哎呀，到底了'*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*    // 上拉数据更新*/}
            {/*    onEndReached={GoodsList}*/}
            {/*    onEndReachedThreshold={50}*/}
            {/*    style={{*/}
            {/*        height: window.screen.height-120,*/}
            {/*    }}*/}
            {/*/>*/}
        </div>
    );
}

export default Buttons;
