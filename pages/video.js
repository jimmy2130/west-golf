import Head from 'next/head'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import { COLORS, QUERIES } from '../src/constants'
import { VIDEO } from '../src/data'

function Video() {
  return (
    <Layout>
        <Content>
          <Text>以下是一些教學影片連結</Text>
          <List>
            {
              VIDEO.map(link => {
                return (
                  <Item key={link.id}>
                    <Link href={link.url} target="_blank">{link.name}</Link>
                  </Item>
                )
              })
            }
          </List>
          <Link
            href="https://www.youtube.com/channel/UCub6r0itMGLE6p88D_mZyWw/videos"
            target="_blank"
          >
            <Action>點擊連結</Action>看更多影片
          </Link>
        </Content>
    </Layout>
  )
}

const Content = styled.div`
  padding-top: 72px;
  padding-bottom: 72px;
  height: 600px;

  @media ${QUERIES.phoneAndDown} {
    padding-left: 16px;
  }  
  /*border: 1px solid;*/
`

const Spacer = styled.div`
  margin-left: auto;
`

const Text = styled.h1`
  font-size: calc(24 / 16 * 1rem);
  margin-bottom: 24px;
  color: ${COLORS.gray[1000]};
`

const List = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
  background: inherit;
  counter-reset: list;
  /*border: 1px solid red;*/
`

const Item = styled.li`
  counter-increment: list;
  &:before {
    content: counter(list) ".";
    margin-right: 8px;
    color: ${COLORS.primary};
    font-weight: 500;
  }
`
const Link = styled.a`
  color: ${COLORS.gray[1000]};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
  }
`

const Action = styled.span`
  color: ${COLORS.primary};
  font-weight: 500;
  &:after {
    content: '  ';
  }
`

export default Video
