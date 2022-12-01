import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'antd';
import exprss from './express.module.css'
export const expeanimal = (props) => {
  return (
    <div className={exprss.imgbox}>
      {/* <Image.PreviewGroup> */}
      <Image.PreviewGroup>
      {/* <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (1).jpg')} />
      </div> */}
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (2).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (3).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (4).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (5).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (6).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (7).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (8).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (9).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (11).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (12).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (13).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (14).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (15).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/monkeyimg/monkey (16).jpg')} />
      </div>

      </Image.PreviewGroup>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(expeanimal)