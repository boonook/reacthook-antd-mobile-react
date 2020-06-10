import {observable,computed,action} from 'mobx';
import { getIsLogin,setIsLogin } from './cookies'
import {login} from '../api/login'
class UserState {
    @observable count = 0;
    @observable name = 'Jokcy';
    @observable isLogin = getIsLogin();
    @observable vm = null;
    @computed get msg(){
        return `${this.name} say  count is ${this.count}`
    }
    @action add(){
        this.count +=1
    }
    @action changeUserMenu(data){

    }
    @action changeName(name){
        this.name =name
    }
    @action login(data,e){
        login(data).then(res=>{
            if(res.code+''==='200'){
                setIsLogin(true);
            }
        })
        let info = data||{};
        this.userInfo =info.userInfo[0]||{};
        this.isLogin = true;
        this.token = info.token||"";
        this.vm = e;
    }
    @action loginOut(data){
        this.userInfo ={};
        this.isLogin = false;
        this.token = "";
    }
}

export default UserState
