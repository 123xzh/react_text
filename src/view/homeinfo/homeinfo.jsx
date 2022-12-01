import React, { useEffect, useState } from 'react'
// import Homeinfoview from "../../view/homeinfo/homeinfo.jsx";
import homeinfo from './homeinfo.module.css'

import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import { NavLink, useRoutes, useLocation, useParams, useSearchParams, useNavigate } from 'react-router-dom'
// import Busintrod from "../../view/business_introduction/busintrod.jsx";
// import NewsCenter from "../../view/News_Center/newscenter.jsx";
// import Expeanimal from "../../view/experimental_animal/expeanimal.jsx";
// import Entculture from "../../view/enterprise_culture/enterprise_culture.jsx";
// import Relatedmechan from "../../view/Related_mechanisms/Relatedmechan.jsx";
// import Personrecrui from "../../view/personnel_recruitment/personrecrui.jsx";
// import Connectus from "../../view/connect_us/connectus.jsx";
import {
    // Routes, Route
    Outlet
} from 'react-router-dom';
// import './home.js'
const Homeview = (props) => {
    // const [homeinfodata,sethominfo] = useState();
    const { state } = useLocation()
    const navigate = useNavigate()
    // sethominfo(state)
    console.log(state);
    var homeinfopath = state.name;
    var homeinfocolumn = homeinfopath;
    const rouerpath = () => {
        // if () {

        // }
        return (<div>
            <span className={homeinfo.backhome} onClick={() => {
                navigate('/home')
            }}>首页</span>
            <span>>{homeinfopath}</span>
        </div>)
    }

    if (homeinfopath == '简介' || homeinfopath == '行业动态') {
        // console.log("dfvkoskox;fgnvdsxkovndkosz");
        homeinfocolumn = rouerpath()
    }
    console.log("ssssssssssssssssss", homeinfopath);
    useEffect(() => {

    }, [])

    return (
        <div className={homeinfo.loaction}>
            <div className={homeinfo.content1} >
                <div className={homeinfo.rightbox}>
                    <div className={homeinfo.righttopbox}>
                        {homeinfocolumn}
                    </div>
                    <div className={homeinfo.righttopboxinfo}>

                        <Outlet />
                    </div>
                    {/* <Routes> */}
                    {/* <Route path="homeinfo/*" element={<Homeinfoview />} /> */}
                    {/* 企业简介 */}
                    {/* <Route path="/busintrod/*" element={<Busintrod />} /> */}
                    {/* 新闻中心  */}
                    {/* <Route path="NewsCenter/*" element={<NewsCenter />} /> */}
                    {/* 实验动物  */}
                    {/* <Route path="/Expeanimal/*" element={<Expeanimal />} /> */}
                    {/* 企业文华  */}
                    {/* <Route path="/Entculture/*" element={<Entculture />} /> */}
                    {/* 相关资质  */}
                    {/* <Route path="/Relatedmechan/*" element={<Relatedmechan />} /> */}
                    {/* 人才招聘  */}
                    {/* <Route path="/Personrecrui/*" element={<Personrecrui />} /> */}
                    {/* 联系我们  */}
                    {/* <Route path="/Connectus/*" element={<Connectus />} /> */}
                    {/* </Routes> */}
                </div>
                <div className={homeinfo.leftbox}>
                    <div className={homeinfo.lefttopbox}>
                    </div>
                    <div>
                        {/* <div></div> */}
                        <div className={homeinfo.logobox}>
                            <h1>动物分类</h1>
                        </div>
                        <div className={homeinfo.infobox1}>
                            <div className={homeinfo.categroug}> <SmileTwoTone />猕猴</div>
                            <div className={homeinfo.categroug}> <SmileTwoTone />食螃猴</div>
                            <div className={homeinfo.imgbox}>
                                <img src={require('@/static/2.png')} alt="" srcset="" />
                                <img src={require('@/static/3.png')} alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className={homeinfo.footercontent1}>4</div> */}
        </div>

    )
}



export default Homeview