import React from 'react'
import styled from 'styled-components'
import {COLORS} from '../../constants'
import { Facebook, Youtube, Mail, Menu, X, ArrowLeftCircle, ArrowRightCircle } from 'react-feather'

const icons = {
  facebook: Facebook,
  youtube: Youtube,
  mail: Mail,
  menu: Menu,
  close: X,
  arrowLeftCircle: ArrowLeftCircle,
  arrowRightCircle: ArrowRightCircle,
}

const Icon = ({ id, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined};
  }

  &:hover svg {
    stroke: ${COLORS.primaryLight}
  }

`

export default Icon;
