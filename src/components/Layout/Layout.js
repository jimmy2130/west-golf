import styled from 'styled-components'
import Head from 'next/head'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavigationBar from '../NavigationBar'
import Footer from '../Footer'
import {COLORS} from '../../constants'

function Layout({children}) {
  return (
    <Wrapper>
      <Head>
        <title>呂西鈞高爾夫推廣中心</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>      
      <NavigationBar/>
        <MaxWidthWrapper>
          {children}
        </MaxWidthWrapper>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.gray[100]};
`

export default Layout