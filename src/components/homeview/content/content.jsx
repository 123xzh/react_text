import React from 'react'
import { connect } from 'react-redux'
import { Outlet } from 'react-router-dom';
import content1 from './content.module.css'
export const content = (props) => {
  return (
    <div className={content1.boxloact}>
        <Outlet />
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(content)