import styled from 'styled-components'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { COLORS, QUERIES } from '../../constants'
import NavLink from '../NavLink'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss, title }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
    >
      <Content aria-label={title}>
        <IconWrapper>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <UnstyledButton onClick={onDismiss}>
            <Icon
              id="close"
              color={COLORS.gray[100]}
              size={36}
              strokeWidth={2}
            />
          </UnstyledButton>
        </IconWrapper>
        <Nav>
          <NavLink path="/">首頁</NavLink>
          <NavLink path="/technique">球技教學</NavLink>
          <NavLink path="/video">教學影片</NavLink>
          <NavLink path="/image">活動花絮</NavLink>
        </Nav>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${COLORS.overlay};
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  background: ${COLORS.primaryDark};
  padding: 32px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconWrapper = styled.div`
  position: fixed;
  padding: 18px 18px 24px 24px;
  top: 14px;
  right: 14px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  font-size: calc(18 / 16 * 1rem);
  text-transform: uppercase;
`;

export default MobileMenu;
