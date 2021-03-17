import { Layout as AntLayout } from 'antd';
import styled from 'styled-components'
import React from 'react';

const { Header, Content, Footer: AntComponent } = AntLayout;

const Logo = styled.h2`
color: #ffffff;
`

const Inner = styled(Content)`
min-height: 280px;
padding: 24px;
background: #fff;`

const Footer = styled(AntComponent)`
text-align: center;`

const Layout = styled(AntLayout)`
min-height: 100vh;`

export default function Page(){
    return (
        <Layout>
            <Header>
            <Logo>WikiperdiaMap</Logo>
            </Header>
            <Inner>

            </Inner>
            <Footer>Netguru College React</Footer>
        </Layout>
    )
}