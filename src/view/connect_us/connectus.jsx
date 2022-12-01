import React from 'react'
import { connect } from 'react-redux'
import homecss1 from './News.module.css'

export const connectus = (props) => {
  return (
    <div>
      <div> <div className={homecss1.content1}>联系我们</div>
                    <div className={homecss1.content131}>地址:广州市从化城郊街6号</div>
                    <div className={homecss1.content131}>电话: 221020-87907168</div>
                    <div className={homecss1.content131}>传真: 782-32322</div>
                    <div className={homecss1.content131}>邮编: 322322</div></div>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(connectus)