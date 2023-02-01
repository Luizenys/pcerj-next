import styled from 'styled-components'

export const Content = styled.div`
  //width: 100%;
  padding: 20px 0px 0px 0px;
  height: 35px;
  //position: absolute;
  display: flex;
  flex-direction: column;
`
export const Background = styled.div`
  background: black;
  opacity: 0.99;
  height: 100%;
  width: 100%;
`

export const Title = styled.h1`
  padding-top: 24px;
  padding-bottom: 54px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 47px;
  float: left;
  padding-left: 200px;
  padding-right: 30px;
  color: #ffffff;
`

export const Logo = styled.div`
padding-left: 18%;
cursor: pointer;

`


export const Button = styled.a`
    font-family: 'Varela Round', sans-serif;
    font-size: 11pt;
    padding: 10px 15px 10px 15px;
    margin-top: 19px;
    margin-right: 10px;
    text-decoration: none;
    color: black;
    background-color: #F7CF32;
    cursor: pointer;
 
    border-radius: 15px;

    &:hover {
        color: black;
        opacity: 0.8;
    }
`

