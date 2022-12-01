import React, 
{ useState,useEffect } 
from 'react'
import { useNavigate,useLocation } from 'react-router-dom';
import { searchRoute } from "../../../utils/util";
import header from './header.module.css'
import { AppstoreOutlined, MailOutlined, SettingOutlined ,ProfileOutlined,HomeOutlined ,GlobalOutlined,SolutionOutlined,PhoneOutlined ,AuditOutlined,ExperimentOutlined   } from '@ant-design/icons';
import { Menu } from 'antd';
const Header1 = () => {
    const items = [
        {
            label: '首页',
            key: '/home',
            icon: <HomeOutlined />,
        },
        {
            label: '简介',
            key: '/homeinfo/busintrod',
            icon: <ProfileOutlined />,
        },
        {
            label: '行业动态',
            key: '/homeinfo/NewsCenter',
            icon: <GlobalOutlined />,
        },
        {
            label: '在栏动物',
            key: '/homeinfo/Expeanimal',
            icon:<ExperimentOutlined />,
        },
        {
            label: '企业文化',
            key: '/homeinfo/Entculture',
            icon: <AppstoreOutlined />,
        },
        {
            label: '巡栏记录',
            key: '/homeinfo/Relatedmechan',
            icon: <AuditOutlined />,
        },
        {
            label: '消毒记录',
            key: '/homeinfo/Personrecrui',
            icon:<SolutionOutlined />,
        },
        {
            label: '联系我们',
            key: '/homeinfo/Connectus',
            icon: <PhoneOutlined />,
        },
    ];
   
    const location = useLocation();
    const { pathname } = location;
    useEffect(() => {
        // signFrom()
        // console.log(location);
      }, [])

    const [timeState, setdatatime] = useState("")
    const navigate = useNavigate();
    const clickMenu = (key) => {
        const route = searchRoute(items.key, items);
        // if (route.isLink) window.open(route.isLink, "_blank");
        var a = items.filter(v=>v.key==key.key)
        // console.log("sssssss",a.map(v=>v.label)[0]);
        // console.log("sssssss",a);
        var b = a.map(v=>v.label)[0];
        // console.log(key);
        navigate(key.key,{
            replace:false,
            state:{
                name:b
            }
        });
        // console.log(key.key);
    };
    const gettime = () => {
        var date = new Date();
        var year = date.getFullYear(); //获取当前年份
        var mon = date.getMonth() + 1; //获取当前月份
        var da = date.getDate(); //获取当前日
        var day = date.getDay(); //获取当前星期几
        var h = date.getHours(); //获取小时
        var m = date.getMinutes(); //获取分钟
        var s = date.getSeconds(); //获取秒
        // console.log('当前时间:'+year+'年'+mon+'月'+da+'日'+'星期'+day+' '+h+':'+m+':'+s);
        let timenow= `当前时间${year}年${mon}月${da}日 星期${day} ${h}:${m}:${s}`;
        setdatatime(timenow);
        // console.log(timeState);

    }
    setInterval(() => {
        gettime();
    }, 1000);

    return (
        <div >

            <div className={header.footer}>
                <div className={header.topcontainer}>
                <img className={header.footerimg} src={require("@/static/back3.jpeg")} alt="" />
                <div className={header.time}>
                {timeState}
                </div>
                    <h1 className={header.title}> 非人灵长类实验动物监测网站系统</h1>
                </div>
                <Menu className={header.menustylewidth} theme="dark" mode="horizontal" items={items} defaultSelectedKeys={['3']} onClick={clickMenu}>
                </Menu>
            </div>
        </div>

    )
}

export default Header1;