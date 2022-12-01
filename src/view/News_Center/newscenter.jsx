import { Image } from 'antd';
import React from 'react'
import { connect } from 'react-redux'
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  AppstoreOutlined 
} from '@ant-design/icons';
import { NavLink, useRoutes, useLocation, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import newcenter from './News.module.css'
export const newscenter = (props) => {
  return (
    <div className={newcenter.newcenterinfo}>
      {/* <div> */}
        <ul>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> “广东省灵长类动物种质资源中心建设”信息公示</span>
            <span>[2021/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 猕猴</span>
            <span>[2021/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 2017年ISO质量体系认证换证培训</span>
            <span>[2021/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 食蟹猴</span>
            <span>[2021/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 猴子也能学会照镜子</span>
            <span>[2022/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 中科院昆明所张亚平院士灵长类昼夜行为进化研究获进展</span>
            <span>[2011/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 150件野生珍稀动物标本亮相安徽准北</span>
            <span>[2001/11/10]</span>
          </li>
          <li>
            <span className={newcenter.newcenterinfo1}><AppstoreOutlined /> 山东省水生野生动物利用收入突破11亿元</span>
            <span>[2019/11/10]</span>
          </li>
          {/* <li>sdlmvgmvlmdlxmvlx</li>
          <li>sdlmvgmvlmdlxmvlx</li>
          <li>sdlmvgmvlmdlxmvlx</li>
          <li>sdlmvgmvlmdlxmvlx</li>
          <li>sdlmvgmvlmdlxmvlx</li> */}
        </ul>
      {/* </div> */}

    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(newscenter)