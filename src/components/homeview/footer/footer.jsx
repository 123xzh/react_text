import React from 'react'
import footere from '../footer/footer.module.css'

export const footer = (props) => {
    return (
        <div className={footere.footername}>
            <h1 className={footere.titlename}>
                非人灵长类实验动物监测网站系统
            </h1>
        </div>
    )
}


export default footer