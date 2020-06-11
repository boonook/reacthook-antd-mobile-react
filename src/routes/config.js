const menus = {
    menus: [
        // 菜单相关路由
        { key: '/app/dashboard/index', title: '首页', icon: 'mobile', component: 'Dashboard' },
        { key: '/app/ui/button/index', title: '按钮', icon: 'mobile', component: 'ButtonPage' },
        { key: '/app/ui/icons/index', title: '图标', icon: 'mobile', component: 'Icons' },
        { key: '/app/table/basicTable/index', title: '基础表格', icon: 'copy', component: 'BasicTable' },
        { key: '/app/table/advancedTable/index', title: '高级表格', icon: 'copy', component: 'AdvancedTable' },
        { key: '/app/table/asynchronousTable/index', title: '异步表格', icon: 'copy', component: 'AsynchronousTable' },
        { key: '/app/form/basicForm/index', title: '基础表单', icon: 'edit', component: 'BasicForm' },
        { key: '/app/echarts/line/index', title: '统计图', icon: 'edit', component: 'EchartsLine' }
    ],
    /// 非菜单相关路由,例如登录，注册，404等；
    others: [
        { key: '/login', title: '登录', icon: 'edit', component: 'LoginPage' },
        { key: '/404', title: '404', icon: 'edit', component: 'NoFound' },
        { key: '/registered', title: '注册', icon: 'edit', component: 'Registered' }
    ],
};

export default menus;
