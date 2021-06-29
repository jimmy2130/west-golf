import Head from 'next/head'
import styled from 'styled-components'
import ProfileCard from '../src/components/ProfileCard'
import Hero from '../src/components/Hero'
import NavigationBar from '../src/components/NavigationBar'
import Footer from '../src/components/Footer'
import { COLORS, QUERIES } from '../src/constants'
import { COACHES } from '../src/data'

function Home() {
  return (
    <Wrapper>
      <Head>
        <title>呂西鈞高爾夫推廣中心</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"/>
      </Head>
      <NavGroup>
        <BackgroundLayer/>
        <BackgroundBar/>
        <Hero/>
        <NavigationBar fixed/>
      </NavGroup>
      <GuideSection>
        <TextCard>
          <Text>提供高爾夫完整的解決方案。想要打好高爾夫，就來找我們！</Text>
          <Text>呂西鈞於1980年代叱吒亞洲高壇，擁有四屆亞洲職業高爾夫巡迴賽年度總冠軍頭銜。近年他成立「呂西鈞高爾夫推廣中心」，以多年累積技巧以及實戰經驗輔導球友及青少年更上層樓。</Text>
          <Text>歡迎加入我們的行列，與我們一同成長、邁向卓越！</Text>
        </TextCard>
      </GuideSection>
      <CoachSection>
        <Title>教練團隊</Title>
        <CoachCenterWrapper>
          {
            COACHES.map(coach => {
              return <ProfileCard key={coach.id} coach={coach}/>
            })
          }
        </CoachCenterWrapper>
      </CoachSection>  
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

const NavGroup = styled.div`
  position: relative;
  z-index: 1;
`

const BackgroundLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${COLORS.primaryDark};
`

const BackgroundBar = styled.div` 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 105px;
  background-color: ${COLORS.overlay};
`

const GuideSection = styled.div`
  height: 500px;
  padding: 64px 16px;
  background: ${COLORS.gray[200]};
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    ${COLORS.gray[200]} 0%,
    ${COLORS.gray[100]} 100%
  );

  @media ${QUERIES.phoneAndDown} {
    height: 400px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

const TextCard = styled.div`
  max-width: 600px;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding: 16px; 
  background: transparent;
`

const Text = styled.p`
  margin-bottom: 32px;
  color: ${COLORS.gray[1000]};
  font-size: calc(18 / 16 * 1rem);
  text-align: justify;
  line-height: 1.5;

  &:last-child {
    margin-bottom: 0;
  }
`

const CoachSection = styled.section`
  isolation: isolate;
  padding-top: 64px;
  padding-bottom: 64px;
  @media ${QUERIES.phoneAndDown} {
    padding-top: 16px;
    padding-bottom: 32px;
  }
`

const Title = styled.div`
  margin-bottom: 52px;
  text-align: center;
  font-size: calc(64 / 16 * 1rem);
  font-family: 'Noto Sans TC';
  font-weight: 700;
  color: ${COLORS.gray[1000]};

  @media ${QUERIES.phoneAndDown} {
    margin-bottom: 52px;
    font-size: calc(40 / 16 * 1rem);
  }
`

const CoachCenterWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 64px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 16px;
`

export default Home
