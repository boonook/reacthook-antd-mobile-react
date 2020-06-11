import React,{useEffect} from 'react';
import Routes from './routes/index';
import { Link } from 'react-router-dom';
import routesConfig from './routes/config'
import './App.less'

function App() {
  return (
    <div className={'appBox'}>
       <div className={'appBoxTop'}>
           {
               routesConfig.menus.map((r,index)=>{
                   return <div key={r.key||index}><Link to={r.key}>{r.title}</Link></div>
               })
           }
       </div>
        <div className={'appBoxCenter'}>
            <div className={'appBoxCenterRight'}>
                <Routes/>
            </div>
        </div>
    </div>
  );
}

export default App;
