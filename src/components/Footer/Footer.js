import {CONTACT} from '../../data'
import styled from 'styled-components'
import {COLORS, QUERIES} from '../../constants'
import MaxWidthWrapper from '../MaxWidthWrapper'
import Icon from '../Icon'

const Footer = () => {
  return (
    <Wrapper>
      <MaxWidthWrapper>
        <Content>
          <ContactWrapper>
            {
              CONTACT.map(store => {
                return (
                  <Contact key={store.id}>
                    <Name>{store.name}</Name>
                    <Tele>{store.tele}</Tele>
                    <Address><Link href={store.link} target="_blank">{store.address}</Link></Address>
                  </Contact>
                )
              })
            }
          </ContactWrapper>
          <LogoGroup>
            <a href="https://www.facebook.com/lhcgolf/" target="_blank">
              <Icon
                id="facebook"
                color={COLORS.gray[100]}
                size={24}
                strokeWidth={2}
                style={{'marginTop': '-3px'}}
              />
            </a>
            <a href="https://www.youtube.com/channel/UCub6r0itMGLE6p88D_mZyWw/videos" target="_blank">
              <Icon
                id="youtube"
                color={COLORS.gray[100]}
                size={24}
                strokeWidth={2}
              />
            </a>
            <a href="mailto:westgolf@ms58.hinet.net">
              <Icon
                id="mail"
                color={COLORS.gray[100]}
                size={24}
                strokeWidth={2}
              />
            </a>
          </LogoGroup>
        </Content>
      </MaxWidthWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding-top: 64px;
  padding-bottom: 64px;
  background: ${COLORS.gray[1000]};
  margin-top: auto;

  @media ${QUERIES.phoneAndDown} {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media ${QUERIES.phoneAndDown} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Contact = styled.div`

`

const Name = styled.div`
  color: ${COLORS.gray[100]};
  font-size: calc(24 / 16 * 1rem);
  font-weight: 500;

  @media ${QUERIES.phoneAndDown} {
    text-align: center;
  }
`

const Tele = styled.div`
  color: ${COLORS.gray[300]};
  font-size: calc(16 / 16 * 1rem);
  font-weight: 300;

  @media ${QUERIES.phoneAndDown} {
    text-align: center;
  }
`

const Address = styled.div`
  @media ${QUERIES.phoneAndDown} {
    text-align: center;
  }
`

const Link = styled.a`
  font-size: calc(16 / 16 * 1rem);
  font-weight: 300;
  color: ${COLORS.gray[300]};
  text-decoration: none;
  &:hover {
    text-decoration: revert;
    text-underline-offset: 6px;
    color: ${COLORS.primaryLight};
  }
`

const LogoGroup = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

export default Footer