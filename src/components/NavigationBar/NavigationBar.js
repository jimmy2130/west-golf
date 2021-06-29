import React from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import {COLORS, QUERIES} from '../../constants'
import MaxWidthWrapper from '../MaxWidthWrapper'
import NavLink from '../NavLink'
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton';
import MobileMenu from '../MobileMenu';

const NavigationBar = ({fixed}) => {
  const router = useRouter()
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <Wrapper
      style={{
        '--position': fixed ? 'fixed' : undefined,
        '--top': fixed ? '0' : undefined,
        '--left': fixed ? '0' : undefined,
        '--backgroundColor': fixed ? 'transparent' : COLORS.primaryDark, 
      }}
    >
      <MaxWidthWrapper>
        <ContentWrapper>
          <Logo onClick={() => router.push('/')}>
            <Title>呂西鈞高爾夫推廣中心</Title>
            <Subtitle>West Gold Sports Inc.</Subtitle>
          </Logo>
          <NavList>
            <li>
              <NavLink path="/">首頁</NavLink>
            </li>
            <li>            
              <NavLink path="/technique">球技教學</NavLink>            
            </li>
            <li>
              <NavLink path="/video">教學影片</NavLink>
            </li>
            <li>
              <NavLink path="/image">活動花絮</NavLink>
            </li>
          </NavList>
          <MobileIconWrapper>
            <UnstyledButton onClick={() => setShowMobileMenu(true)}>
              <Icon
                id="menu"
                color={COLORS.gray[100]}
                size={36}
                strokeWidth={2}
              />
            </UnstyledButton>
          </MobileIconWrapper>
        </ContentWrapper>
      </MaxWidthWrapper>
      <MobileMenu
        title="Menu"
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: var(--position);
  top: var(--top);
  left: var(--left);
  width: 100%;
  height: 105px;
  padding-top: 24px;
  padding-bottom: 24px;
  /*border: 1px solid white;*/
  background-color: var(--backgroundColor);
  color: ${COLORS.gray[100]};

  @media ${QUERIES.phoneAndDown} {
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[100]};
  cursor: pointer;
  &:hover {
    color: ${COLORS.primaryLight};
  }
`

const Title = styled.div`
  font-size: calc(24 / 16 * 1rem);
  font-weight: 500;
`

const Subtitle = styled.div`
  font-size: calc(16 / 16 * 1rem);
  font-weight: 300;
  text-transform: uppercase;
  margin-left: 3px;
`

const NavList = styled.ul`
  display: flex;
  gap: clamp(1.2rem, 7.5vw - 1.25rem, 3rem);
  @media ${QUERIES.phoneAndDown} {
    display: none;
  }
`

const MobileIconWrapper = styled.div`
  display: none;
  @media ${QUERIES.phoneAndDown} {
    display: block;
    padding: 18px 18px 19px;
  }
`

export default NavigationBar


