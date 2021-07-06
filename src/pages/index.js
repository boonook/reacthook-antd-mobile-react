import NoFound from '@pages/auth/noFound';
import LoginPage from '@pages/auth/login';
import Registered from '@pages/auth/registered';
import Dashboard from '@pages/dashboard/index';
import BasicForm from '@pages/form/basicForm';
import AdvancedTable from '@pages/table/advancedTable';
import AsynchronousTable from '@pages/table/asynchronousTable';
import BasicTable from '@pages/table/basicTable';
import ButtonPage from '@pages/ui/buttons';
import Icons from '@pages/ui/icons';
import EchartsLine from '@pages/echarts/line';
import TestPage from '@pages/test';
import MenuExample from '@pages/ui/menu';
const menus = {
    NoFound,
    LoginPage,
    Registered,
    TestPage,
    Dashboard,
    BasicForm,
    AdvancedTable,
    AsynchronousTable,
    BasicTable,
    ButtonPage,
    Icons,
    MenuExample,
    EchartsLine
}

////将每个活动进行单元化
const partnerFiles = require.context('./promotion',true, /\.js$/)
let partnerConfig = {}
partnerFiles.keys().forEach(key => {
  let fileKey = key.replace(/\.\/|\router.js/g, '');
  console.log('------------------',partnerFiles(key).default);
  partnerConfig[fileKey] = partnerFiles(key).default
})
// debugger

console.log(partnerConfig);


export default menus;
