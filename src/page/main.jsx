import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function main() {
    return (
        <div>
            <h1>我是Home内容</h1>
            <ul>

                <NavLink to='analyse'>News</NavLink>
                <NavLink to='manage'>Message</NavLink>
                <NavLink to='manage'>Message</NavLink>
            </ul>

            <div>
                <Outlet />
            </div>
        </div>

    )
}
