import styled from 'styled-components'
import Image from 'next/image'
import {COLORS} from '../../constants'

const Hero = () => {
  return (
    <Wrapper>
      <Image
        src="/img/wallpaper01.jpg"
        alt="a hero image for index page"
        layout="fill"
        objectFit="cover"
      />
      <Overlay />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  height: min(650px, 80vw);
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(${COLORS.overlay}, ${COLORS.overlay});
`

export default Hero