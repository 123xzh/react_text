import Main from "../layouts/layout.jsx";
import Homeview from "../view/home/home.jsx";
import Homeinfo from "../view/homeinfo/homeinfo.jsx";
import Busintrod from "../view/business_introduction/busintrod.jsx";
import NewsCenter from "../view/News_Center/newscenter.jsx";
import Expeanimal from "../view/experimental_animal/expeanimal.jsx";
import Entculture from "../view/enterprise_culture/enterprise_culture.jsx";
import Relatedmechan from "../view/Related_mechanisms/Relatedmechan.jsx";
import Personrecrui from "../view/personnel_recruitment/personrecrui.jsx";
import Connectus from "../view/connect_us/connectus.jsx";

// import { lazy} from "react";
// import {Navigate} from 'react-router-dom'

// 路由表统一管理理由
const routes = ([
    {
        path: '/*',  //路径
        element: <Main />,  //组件
        children: [
            {
                path: 'home',
                element: <Homeview />,
            },
            {
                path: 'homeinfo/*',
                element:<Homeinfo />,
                children:[
                    {
                        path: 'busintrod',
                        element: <Busintrod />
                    },
                    {
                        path: 'NewsCenter',
                        element: <NewsCenter />
                    },
                    {
                        path: 'Expeanimal',
                        element: <Expeanimal />
                    },
                    {
                        path: 'Entculture',
                        element: <Entculture />
                    },
                    {
                        path: 'Relatedmechan',
                        element: <Relatedmechan />
                    },
                    {
                        path: 'Personrecrui',
                        element: <Personrecrui />
                    },
                    {
                        path: 'Connectus',
                        element: <Connectus />
                    },
                ]
            }

        ],
        //子路由
        // children: [
        //     {
        //         path: 'home',
        //         // element: lazy(() => import('../view/home/home.jsx')),
        //         element: <Homeview />,
        //     },
        //     {
        //         path: 'busintrod',
        //         element: <Busintrod />
        //     },
        //     {
        //         path: 'NewsCenter',
        //         element: <NewsCenter />
        //     },
        //     {
        //         path: 'Expeanimal',
        //         element: <Expeanimal />
        //     },
        //     {
        //         path: 'Entculture',
        //         element: <Entculture />
        //     },
        //     {
        //         path: 'Relatedmechan',
        //         element: <Relatedmechan />
        //     },
        //     {
        //         path: 'Personrecrui',
        //         element: <Personrecrui />
        //     },
        //     {
        //         path: 'Connectus',
        //         element: <Connectus />
        //     },
        // ]
    },
    // {
    //     path:'login', 
    //     element:<Login/>
    // },
    // {
    //     path:'/',
    //     //实现路由重定向
    //     element:<Navigate to='/main'/>
    // }
])
export default routes;