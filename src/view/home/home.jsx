import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useRoutes, useLocation, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import homecss from './home.module.css'
import { Button } from 'antd';
import { CheckCircleTwoTone, HeartTwoTone, SmileTwoTone } from '@ant-design/icons';
import loadingimg from '@/static/loading.gif'
// import { Button } from 'antd';
// import './home.js'
const Homeview = (props) => {
    const { state } = useLocation()
    const params = useParams()
    const navigate = useNavigate()
    // console.log(params);
    // console.log(state);
    const [imgshow, setimgshow] = useState(false)
    // const id = params.id
    // const title = params.title

    const banner = useRef(null) // 初始值
    const imgref = useRef(null) // 初始值
    const preconer = useRef(null) // 初始值
    const imgview = useRef(null) // 初始值
    setTimeout(() => {
        startimg();
        // console.log("sdasfa");
    }, 2000);
    function startimg() {
        setimgshow(true)
        var oDiv = banner.current;
        // console.log(oDiv.getElementsByTagName('ul')[0]);
        var oUl = oDiv.getElementsByTagName('ul')[0];
        var Li = oUl.getElementsByTagName('li');
        oUl.innerHTML = oUl.innerHTML + oUl.innerHTML;
        oUl.style.width = Li[0].offsetWidth * Li.length + 'px';//ul的宽度等于每个li的宽度乘以所有li的长度
        var speed = 2
        function move() {
            if (oUl.offsetLeft < -oUl.offsetWidth / speed) {
                oUl.style.left = '0'
            }
            //如果右边横向滚动的距离大于0 就让他的位置回到一半
            if (oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / speed + 'px';
            }
            oUl.style.left = oUl.offsetLeft + speed + 'px';//进行右横向滚动
        }
        //调用方法
        var timer = setInterval(move, 130)//速度

        //鼠标悬停时暂停
        oDiv.onmouseover = function () {
            clearInterval(timer);
        }
        //鼠标离开之后恢复
        oDiv.onmouseout = function () {
            timer = setInterval(move, 30)
        }
        oDiv.onclick = function (e) {
            var lis = imgref.current;
            var img = lis;
            let container = preconer.current;
            container.onclick = function () {
                container.remove()
            }
            container.style.display = "block";

            // 创建预览图片
            let innerImg = imgview.current;
            // console.log(imgview.current);
            // console.log(innerImg);
            // innerImg.classList.add("image")

            // 将预览图片的 src 设置为绑定图片的 src
            // innerImg.style.display = "block";
            // innerImg.style.width = "300px";
            // innerImg.style.height = "300px";
            innerImg.src = img.src
            // console.log("imh", img.src);
            // console.log("imh", innerImg.src);


            // 图片添加到预览器中
            container.append(innerImg)

            // 预览器添加到 body 中
            document.body.append(container)
        }
    }
    function imgclick() {
        // console.log("sdassd");
    }
    function Loadingimg() {
        return <img className={homecss.loadingbox} src={require('@/static/loading.gif')} alt="" />
        // console.log("sdassd");
    }

    return (
        <div className={homecss.loactionbox}>
            <div className={homecss.content} >
                <div className={homecss.content31}>
                    <div className={homecss.content1}>动物分类</div>
                    <div className={homecss.iconhover}> <SmileTwoTone />猕猴</div>
                    <div className={homecss.iconhover}> <SmileTwoTone />食蟹猴</div>
                    {/* <div className={homecss.iconhover}> <SmileTwoTone />asjjcfjjscopjaoj</div> */}
                </div>
                <div className={homecss.content21}>
                    <div className={homecss.content2}>
                        <h3>简介</h3>
                        {/* <NavLink  to='/homeinfo/busintrod'> */}
                        <h4 onClick={() => {
                            navigate('/homeinfo/busintrod', {
                                replace: false,
                                state: {
                                    name: '简介'
                                }
                            })
                        }}>>>更多</h4>
                        {/* </NavLink> */}
                    </div>
                    <div className={homecss.newinfo}>
                        非人灵长类实验动物养殖场始创于1996年，是中国开展灵长类实验养殖最早、繁殖规模最大的科研单位之“，前身为广州天湖濒危动物驯养研究所。本企业正式成立于2003年9月，是一家以驯养猕猴、食蟹猴，进行货物进出口贸易的合伙企业。注册资本为110万元人民币，目前公司的资产总值为8800万人民币。本企业是面向灵长类实验科学前沿，以企业标准化、产业化、社会化为发展方向，重点开展灵长类实验动物开发和技术服务，包括标准灵长类实验动物提供，实验动物疾病模型的建立，动物受托实验各方面的基础应用研究及关键性技术创新的集成企业。
                        本公司致力于打造全国最好的灵长类养殖基地，近几年来通过不断地完善制度、规范管理，在全体员工共同努力下，取得了许多骄人的成绩: 2010年12月，获得了广东省科学技术厅颁发的实验动物生产许可证:2011年8月，获得了国际知名认证公司SGS颁发的ISO9001:2008质量管理体系认证证书。特别值得骄傲的是我们的实验室工作得到客户的充分肯定: 在过去两年里，产品的病毒检测正确率达到了99.89%。质量是企业的生命线，我们企业通过树立“质量胜于一切”的理念，以为客户提供高品质的产品为首要目标;尊重人才，实行人性化管理，建立强大的合作团队，为企业的继续发展提供强大的后盾。目前我们公司拥有员工113人，其中管理人员18人。拥有高级管理人员职称2人，中级管理人员职称3人。员工学历本科及以上7人，大中专以上学历人数超过60%。所有技术人员均经过严格培训考核上岗。
                        由 在线客服
                        发展到现在，我们华珍场的综合水平已迈上一个新的台阶，产业化的进程在国内处于领先水平，不仅拥有全国第二大的存量，企业化管理水平已接近国际化标准，向企业的“四个化”(四个化，企业管理规范化、企业生产产业化、产品质量国际化、企业经营市场化) 目标又迈进了一大步。
                        另外，我场拥有得天独厚的企业优势，为我公司的继续发展提供了坚强的后盾。首先，灵长类实验动物养殖拥有其他行业所每有的行业发展优势，其次，拥有同行业中独一无二的客户优势，目前我场最大也是唯一外销的客户一一美国科文斯医药研发有限公司是世界上规模最大、服务最全面的药物开发服务公司之一;第三，我场拥有最优秀的合作团队，除了实行“以人为本”的人才战略，注重培养自己的人才，建立自己的优秀团队的同时，聘请了多位国外知名专家为我场的企业发展顾问，组成同行业中独一无二的顾问团队:第四，从化市华珍动物养殖场拥有同类行业中先进的技术及饲养管理经验，在国际市场上拥有绝对的品牌优势:第五，我场与同行业建立起友好合作关系。
                        随着从化市华珍动物养殖场生产社会化、标准化、产业化进程的推进，我场的发展将进入企业发展的新时期一一改变销售资源为销售服务，重点开展灵长类实验动物开发和技术服务，包括标准灵长类实验动物提供，实验动物疾病模型的建立，动物受托实验各方面的基础应用研究及关键性技术创新的集成，推动我国生命科学及其他相关产业发展，增强我国生命科学研究和生物医学产业在国际上的竞争力。从化市华珍动物养碍鞍碍懊敖边暗郴渡挨叭鞍搬坝啊吧爱摆安皑撑»俸剥疤鳖霸哎败挨哎巴肮国家企业信用信息公示
                    </div>
                    <div className={homecss.content2}>
                        <h3>行业动态</h3>
                        <h4 onClick={() => {
                            navigate('/homeinfo/NewsCenter', {
                                replace: false,
                                state: {
                                    name: '行业动态'
                                }
                            })
                        }}>>>更多</h4>
                    </div>
                    <div className={homecss.newinfo1}>
                        <div className={homecss.infoloca}>
                            <span className={homecss.infolocabox1}>
                                "灵长类动物物种资质"
                            </span>
                            <span className={homecss.infolocabox2}>
                                [2021/11/10]
                            </span>
                        </div>
                        <div className={homecss.infoloca}>
                            <span className={homecss.infolocabox1}>
                                "灵长类动物物种资质"
                            </span>
                            <span className={homecss.infolocabox2}>
                                [2021/11/10]
                            </span>
                        </div>
                        <div className={homecss.infoloca}>
                            <span className={homecss.infolocabox1}>
                                "灵长类动物物种资质"
                            </span>
                            <span className={homecss.infolocabox2}>
                                [2021/11/10]
                            </span>
                        </div>
                        <div className={homecss.infoloca}>
                            <span className={homecss.infolocabox1}>
                                "灵长类动物物种资质"
                            </span>
                            <span className={homecss.infolocabox2}>
                                [2021/11/10]
                            </span>
                        </div>
                    </div>
                </div>
                <div  className={homecss.content13}>
                    <div className={homecss.content1}>联系我们</div>
                    <div className={homecss.content131}>地址:广州市从化城郊街6号</div>
                    <div className={homecss.content131}>电话: 221020-87907168</div>
                    <div className={homecss.content131}>传真: 782-32322</div>
                    <div className={homecss.content131}>邮编: 322322</div>
                    <div className={homecss.content132} onClick={() => {
                            navigate('/homeinfo/Connectus', {
                                replace: false,
                                state: {
                                    name: '联系我们'
                                }
                            })
                        }}>
                        
                    <img src={require('@/static/1.jpg')} alt="" srcset="" />
                    <h1><strong>
                        联系我们
                    </strong>
                        </h1>
                    </div>
                </div>
            </div>
            {
                imgshow ? <div className={homecss.footercontent}>
            {/* <div>sczsxdcv</div> */}
            <div className={homecss.banner} ref={banner} >
                    <ul >
                        <li> <img ref={imgref} src={require("./2/1.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/2.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/3.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/4.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/5.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/6.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/7.png")} alt="" /></li>
                        <li> <img ref={imgref} src={require("./2/8.png")} alt="" /></li>
                    </ul>
                </div>
                <div ref={preconer} className={homecss.previewntainer}>
                    <div ref={imgview} className={homecss.image1}>

                    </div>
                </div>
            </div> : <Loadingimg/>
            }

        </div>

    )
}



export default Homeview