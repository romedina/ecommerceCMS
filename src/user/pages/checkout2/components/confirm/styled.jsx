import styled from 'styled-components'

export const Content = styled.div`

`
export const Title = styled.div`
  font-size: 1.2em;
  font-weight: bold;
`
export const Row = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background: #fff;
  margin-top: 10px;
  margin-bottom: 20px;
  min-height: 100px;
  padding: 50px;
  @media screen and (max-width: 500px){
    padding: 20px;
  }
`
export const Icon = styled.div`
  color: #0e3f67;
  background: #cdcdcd;
  border-radius: 50%;
  padding: 2px;
  font-size: 30px;
  margin-right: 15px;
`
export const Describe = styled.div`
  flex: 1 1 auto;
  font-size: 1.2em;
`
export const Edit = styled.div`
  position: absolute;
  color: #008ffd;
  bottom: 10px;
  right: 15px;
  font-weight: bold;
  cursor: pointer;
`
