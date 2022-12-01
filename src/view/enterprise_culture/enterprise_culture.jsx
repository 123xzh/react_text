import React from 'react'
import { connect } from 'react-redux'
import { Image } from 'antd';
import exprss from './enterprise_culture.module.css'
export const expeanimal = (props) => {
  return (
    <div className={exprss.imgbox}>
      {/* <Image.PreviewGroup> */}
      <Image.PreviewGroup>
      {/* <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (1).jpg')} />
      </div> */}
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/1.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/2.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/3.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/4.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/5.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/6.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/7.jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/clutle/8.jpg')} />
      </div>
      {/* <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (11).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (12).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (13).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (14).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (15).jpg')} />
      </div>
      <div className={exprss.imgbox1}>
        <Image width={170} className={exprss.Imagewid} src={require('@/static/img/ (16).jpg')} />
      </div> */}

      </Image.PreviewGroup>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(expeanimal)