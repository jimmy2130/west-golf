import Image from 'next/image'
import styled from 'styled-components'
import Layout from '../src/components/Layout'
import { COLORS, QUERIES } from '../src/constants'
import { GALLERY } from '../src/data'

function Gallery() {
  return (
    <Layout>
      <Wrapper>
      {
        GALLERY.map((photo) => {
          return (
            <Container key={photo.id}>
              <ImageWrapper>
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </ImageWrapper>
            </Container>
          )
        })
      }
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  padding: 64px 0;

  @media ${QUERIES.phoneAndDown} {
    padding: 16px 0;
  }
`

const Container = styled.div`
  flex: 1 1 500px;
  max-width: 600px;
`

const ImageWrapper = styled.div`
  position: relative;
  padding-bottom: 62.5%;
  height: 0;
`

export default Gallery
