import { useRouter } from 'next/router'
import styled from 'styled-components'
import UnstyledButton from '../UnstyledButton'
import { COLORS, QUERIES } from '../../constants';

const NavLink = ({children, path}) => {
  const router = useRouter()
  return (
    <NavLinkWrapper
      onClick={() => router.push(path)}
      style={{
        '--color': router.asPath === path ? COLORS.primaryLight : COLORS.gray[100],
        '--textDecoration': router.asPath === path ? 'underline' : 'none',
        '--textUnderlineOffset': router.asPath === path ? '6px' : '0',
      }}
    >
      {children}
    </NavLinkWrapper>
  )
}

const NavLinkWrapper = styled(UnstyledButton)`
  color: var(--color);
  text-decoration: var(--textDecoration);
  text-underline-offset: var(--textUnderlineOffset);
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 6px;
    color: ${COLORS.primaryLight};
  }
`;

export default NavLink