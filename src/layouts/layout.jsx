import React from 'react'
// import { Layout } from 'antd';
// import { connect } from 'react-redux'
// import { Layout } from "antd";
import layoutstyle from './layout.module.css';
import Header from '../components/homeview/header/header.jsx';
import Footer from '../components/homeview/footer/footer.jsx';
import Content from '../components/homeview/content/content.jsx';
// const { Header, Footer, Sider, Content } = Layout;
export const layout = (props) => {
    return (
        <section className="container">
            <div className={layoutstyle.widthe}>
                <Header >
                </Header >
                <Content>
                </Content>
                <Footer>
                </Footer>
            </div>
        </section>
    )
}

// const mapStateToProps = (state) => ({})

// const mapDispatchToProps = {}

export default layout