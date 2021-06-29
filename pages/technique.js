import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import Icon from '../src/components/Icon'
import UnstyledButton from '../src/components/UnstyledButton'

import { COLORS, QUERIES } from '../src/constants'
import { TECH } from '../src/data'

function Technique() {
  const [tipIndex, setTipIndex] = React.useState(0) 

  function next() {
    setTipIndex(tipIndex + 1 === TECH.length ? 0 : tipIndex + 1)
  }

  function last() {
    setTipIndex(tipIndex - 1 < 0 ? TECH.length - 1 : tipIndex - 1)
  }

  function keyboard({key}) {
    if(key === 'ArrowRight')
      next()
    else if(key === 'ArrowLeft')
      last()
  }

  React.useEffect(() => {
    window.addEventListener('keydown', keyboard)
    return () => {
      window.removeEventListener('keydown', keyboard)
    }
  })

  return (
    <Layout>
      <Content>
        <Card>
          <VideoWrapper>
            <iframe
              src={TECH[tipIndex].url}
              width="600"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
            >
            </iframe>
          </VideoWrapper>
          <TextWrapper>
            <div>
            {
              TECH[tipIndex].info.split('\n').map((item, index) => {
                return <Info key={index}>{item}</Info>
              })
            }
            </div>
            <Source>{TECH[tipIndex].source}</Source>
          </TextWrapper>
        </Card>
        <SelectorWrapper>
          {
            TECH.map((tip, index) => {
              return (
                <SelectDot
                  key={tip.id}
                  onClick={() => setTipIndex(index)}
                  style={{
                    '--highlighted': tipIndex === index ? COLORS.gray[800] : COLORS.gray[400],
                  }}
                ></SelectDot>
              )
            })
          }
        </SelectorWrapper>
        <ButtonGroup>
          <ChangeItemButton onClick={last}>
            <Icon
              id="arrowLeftCircle"
              color={COLORS.gray[600]}
              size={36}
              strokeWidth={2}
            />
          </ChangeItemButton>
          <ChangeItemButton onClick={next}>
            <Icon
              id="arrowRightCircle"
              color={COLORS.gray[600]}
              size={36}
              strokeWidth={2}
            />
          </ChangeItemButton>
        </ButtonGroup>
      </Content>
    </Layout>
  )
}

const Content = styled.main`
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 72px;
  padding-bottom: 72px;

  @media ${QUERIES.phoneAndDown} {
    padding-top: 36px;
    padding-bottom: 0px;
  }
`

const Card = styled.div`

  margin-bottom: 24px;
  background: ${COLORS.gray[300]};
  border-radius: 8px;
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1.2px 1.2px,
    rgba(0, 0, 0, 0.027) 0px 2.9px 3px,
    rgba(0, 0, 0, 0.035) 0px 5.5px 5.6px,
    rgba(0, 0, 0, 0.043) 0px 9.8px 10.1px,
    rgba(0, 0, 0, 0.05) 0px 18.4px 18.8px,
    rgba(0, 0, 0, 0.07) 0px 44px 45px;

  @media ${QUERIES.phoneAndDown} {
    margin-bottom: 0;
  }
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
  }
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 212px;
  padding: 32px 36px;
  color: ${COLORS.gray[1000]};

  @media ${QUERIES.phoneAndDown} {
    padding: 16px 24px;
  }
`

const Info = styled.p`
  font-size: calc(16 / 16 * 1rem);
  text-align: justify;
  margin-bottom: 12px;
`

const Source = styled.p`
  font-size: calc(16 / 16 * 1rem);
  text-align: right;

  &:before {
    content: '—';
  }
`

const SelectorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
  margin-bottom: 8px;

  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`

const SelectDot = styled(UnstyledButton)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--highlighted);

  &:hover {
    background: ${COLORS.gray[800]};
  }
`

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 16px;
`

const ChangeItemButton = styled(UnstyledButton)`
  padding: 16px 4px;

  &:hover svg {
    stroke: ${COLORS.gray[800]};
  }
`

export default Technique
