import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { COLORS, QUERIES } from '../../constants'

const List = ({ title, content }) => {
  const [info, setInfo] = React.useState(
    content.length <= 3 ? [...content] : [...[...content].slice(0, 2), '...更多']
  )
  const [expand, setExpand] = React.useState(content.length <= 3 ? true : false)

  const expandList = () => {
    if(!expand)
      setExpand(true)
  }

  React.useEffect(() => {
    if(expand)
      setInfo(content)
  }, [expand])

  return (
    <ListWrapper onClick={expandList} style={{'--expand': expand ? 'revert' : 'pointer'}}>
      <ListTitle>{title}</ListTitle>
      <ListItemGroup>
        {
          info.map((item, index) => {
            return (
              <ListItem key={index} value={item}/>
            )
          })
        }
      </ListItemGroup>
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  cursor: var(--expand);
  margin-top: 20px;
  flex: 1;
`

const ListItem = ({ value }) => {
  return (
    <ListItemWrapper>
      <Invisible>
        <Bullet></Bullet>
      </Invisible>
      {value}
    </ListItemWrapper>
  )
}

const ListItemWrapper = styled.li`
  position: relative;
  padding-left: 16px;
  margin-bottom: 8px;
  color: ${COLORS.gray[1000]};
  font-weight: 300;
`

const Invisible = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  background: inherit;
`

const Bullet = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${COLORS.gray[900]};
`

const ProfileCard = ({coach}) => {
  const {
    chineseName,
    englishName,
    career,
    feature,
    branch,
    imgUrl,
    imgAlt,
    scale,
    position,
  } = coach
  return (
    <ProfileCardWrapper>
      <Tag style={{'--background': branch === 'shipai' ? COLORS.primary : COLORS.secondary}}>
        {branch === 'shipai' ? '石牌店' : '碧潭店'}
      </Tag>
      <ProfileImage>
        <StyledImage
          src={imgUrl}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          scale={scale}
          position={position}
        />
      </ProfileImage>
      <ChineseName>{chineseName}</ChineseName>
      <EnglishName>{englishName}</EnglishName>
      <Content>
        {
          career.length ? (
            <List title="職涯經歷" content={career}/>
          ) : null
        }
        {
          feature.length ? (
            <List title="教學特色" content={feature}/>
          ) : null
        }
      </Content>
    </ProfileCardWrapper>
  )
}

const ProfileCardWrapper = styled.figure`
  position: relative;
  max-width: 640px;
  flex: 1 1 500px;

  padding: 16px;
  padding-top: 80px;
  margin: 12px;
  background: ${COLORS.gray[100]};
  border-radius: 16px;

  /*box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  box-shadow: 0 10px 50px -30px ${COLORS.secondary};*/
  box-shadow:
    rgba(0, 0, 0, 0.02) 0px 1.2px 1.2px,
    rgba(0, 0, 0, 0.027) 0px 2.9px 3px,
    rgba(0, 0, 0, 0.035) 0px 5.5px 5.6px,
    rgba(0, 0, 0, 0.043) 0px 9.8px 10.1px,
    rgba(0, 0, 0, 0.05) 0px 18.4px 18.8px,
    rgba(0, 0, 0, 0.07) 0px 44px 45px;
`

const Tag = styled.div`
  position: absolute;
  top: 32px;
  left: -16px;
  padding: 8px 27px 8px 32px;
  background: var(--background);
  color: ${COLORS.gray[100]};
  opacity: 0.8;
  font-weight: 500;
  font-size: calc(18 / 16 * 1rem);
  letter-spacing: 4px;

  @media ${QUERIES.phoneAndDown} {
    padding: 8px 13px 8px 16px;
  }
`

const StyledImage = styled(Image)`
  transform: ${p => `scale(${p.scale})`};
  object-position: ${p => p.position};
`

const ProfileImage = styled.div`
  position: absolute;
  top: -40px;
  left: 0px;
  right: 0px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  border: 4px solid ${COLORS.gray[200]};
  overflow: hidden;
`

const ChineseName = styled.h1`
  text-align: center;
  font-size: calc(32 / 16 * 1rem);
  font-family: 'Noto Sans TC';
  font-weight: 700;
  color: ${COLORS.gray[1000]};
`
const EnglishName = styled.h3`
  text-align: center;
  font-size: calc(20 / 16 * 1rem);
  font-family: 'Roboto';
  font-weight: 300;
  color: ${COLORS.gray[700]};
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  @media ${QUERIES.phoneAndDown} {
    flex-direction: column;
    gap: 0;
  }
`

const ListTitle = styled.p`
  font-size: 20px;
  color: ${COLORS.gray[900]};
  font-weight: 600;
  margin-top: 0px;
  margin-bottom: 12px;
  text-align: center;
  @media ${QUERIES.phoneAndDown} {
    text-align: revert;
  }
`

const ListItemGroup = styled.ul`

`


export default ProfileCard