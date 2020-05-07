import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import styled from 'styled-components'

export const Content = styled.div`
  align-items: center;
  display: flex;
  padding: 10px;
  margin: 5px 0px;
  border-radius: 5px;
  border: 1px solid var(--user-gray-light);
  justify-content: space-between;
  font-size: 1.2em;
  font-weight: bold;
  background: #fff;
  @media screen and (max-width:600px){
    font-size: 1em;
  }
`

export const PictureContent = styled.div`
  width: 120px;
  height: 120px;
  min-width: 120px;
  min-height: 120px;
`
export const PictureContentHead = styled(PictureContent)`
  min-height: 0px!important;
  height: 0px!important;
`
export const DeleteIcon = styled(DeleteOutlinedIcon)`
  background: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
  color: #fff;
  padding: 5px;
  cursor: pointer;
  margin-right: 20px;
  @media screen and (max-width:500px){
    margin-right: 0px;
  }
`
export const DeleteIconHeder = styled(DeleteIcon)`
  height: 0px;
  background: none;
  opacity: 0;
`

export const DataContent = styled.div`
  width: 100%;
  margin: 0px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width:600px){
    flex-wrap: wrap;
    margin: 0px;
  }
`
export const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
export const DescribeQuiantity = styled.span`
  display: none;
  @media screen and (max-width:600px){
    display: inline;
    margin-right: 10px;
  }
`

export const Title = styled.div`
  width:40%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 60%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    margin-bottom: 8px;
  }
`
export const Price = styled.div`
  width:20%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 30%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    font-weight: normal;
  }
`
export const QuantityControls = styled.div`
  width:30%;
  padding-left: 10px;
  @media screen and (max-width:850px){
    width: 10%;
  }
  @media screen and (max-width:600px){
    width: 100%;
    font-weight: normal;
  }
`
