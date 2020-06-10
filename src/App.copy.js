import React,{useState,createContext} from 'react';
import { SearchBar} from 'antd-mobile'
import logo from './logo.svg';
import './App.less';
import ButtonPage from './components/button/ButtonPage'
import Card from './components/card/Card'
import MobxTle from './components/mobxTle/MobxTle'

export const Context = createContext(0)
function App() {
    const [count,setCount] = useState(0);

    function onBtn(e){
        setCount(count+1)
    }

    return (
        <div className="App">
            <header className="App-header">
                <div style={{width:"100%"}}>
                    <SearchBar placeholder="Search" maxLength={8} />
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <ButtonPage title={'新增'} on_click={onBtn}/>
                <hr/>
                {count}
                <Context.Provider value={count}>
                    <Card/>
                </Context.Provider>
                <MobxTle/>
            </header>
        </div>
    );
}

export default App;
