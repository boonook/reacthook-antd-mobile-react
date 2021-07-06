const router = [{
    path: '/app/freebillsflyfree',
    name: 'freebillsflyfree',
    component: () => import( /* webpackChunkName: 'promotion/freebillsflyfree' */ './pages/freebillsflyfree'),
    meta: {
      title: '免单随心飞'
    },
    auth:true
},
  {
    path: '/app/freebillsflyfree/rewards',
    name: 'freebillsflyfreeAwards',
    component: () => import( /* webpackChunkName: 'promotion/freebillsflyfree' */ './pages/rewards'),
    meta: {
      title: '我的奖品'
    },
    auth:true
},
  {
    path: '/app/freebillsflyfree/rules',
    name: 'freebillsflyfreeRules',
    component: () => import( /* webpackChunkName: 'promotion/freebillsflyfree' */ './pages/rules'),
    meta: {
      title: '活动规则'
    },
    auth:true
}];
export default router;