import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/layout_user'
import ContainerBase from '../../components/container'

const About = props => {
  return (
    <Layout>
      <Container>
        <Picture src='https://cdn.tn.com.ar/sites/default/files/styles/1366x765/public/2020/04/03/meme-africanos.jpg' />
        <Description>
          <Title>Historia</Title>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam at fugit. Minima consequuntur labore numquam maxime, quam nemo molestias. Est explicabo, reprehenderit deleniti quibusdam soluta architecto. Unde, iste sunt!
          </P>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam at fugit. Minima consequuntur labore numquam maxime, quam nemo molestias. Est explicabo, reprehenderit deleniti quibusdam soluta architecto. Unde, iste sunt!
          </P>
          <P>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta laboriosam at fugit. Minima consequuntur labore numquam maxime, quam nemo molestias. Est explicabo, reprehenderit deleniti quibusdam soluta architecto. Unde, iste sunt!
          </P>
        </Description>
      </Container>
    </Layout>
  )
}

const Container = styled(ContainerBase)`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  border-radius: 5px;
  background-color: var(--background-secondary);
  border: 1px solid #cdcdcd;
  @media screen and (max-width:700px){
    flex-direction: column;
    margin: 0px;
    border: none;
  }
`
const Picture = styled.img`
  width: 50%;
  margin-right: 20px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width:700px){
    margin-right: 0px;
    width: 100%
  }
  @media screen and (max-width:500px){
    height: 250px
  }
`
const Description = styled.section`
  width: 50%;
  @media screen and (max-width:700px){
    width: 100%
  }
`
const P = styled.p`
  color: var(--paragraph);
`

const Title = styled.h1`
  color: var(--primary)
`

export default About
