import styled from 'styled-components'

export const Subtitulo = styled.p`
  font-size: 12pt;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding-bottom: 15px;
  border-bottom: 1px solid ${props => props.inputColor || "#C2C2C2"};
  @media screen and (max-width: 900) {
    font-size: 10pt;
    letter-spacing: -1px;
  }
  
`
export const Subtitulo2 = styled.p`
  font-size: 11pt;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding-bottom: 0px;
  padding-right: 15px;
  letter-spacing: -1px;
  @media screen and (max-width: $small) {
    font-size: 10pt;
  }
  width: 80%
  
`
export const Categoria = styled.h4`
  font-size: 10pt;
  color: #B49726;
  height: 100%;
  width: 100%;
  padding-top: 5px;
`

export const Categoria2 = styled.h4`
  font-size: 10pt;
  color: #B49726;
  height: 100%;
  width: 100%;
  padding-top: 15px;
`

export const Titulo = styled.h3`
    font-family: 'Varela Round', sans-serif;
    font-size: 15pt;
    margin-bottom: 25px;
`

export const Button = styled.a`
    font-family: 'Varela Round', sans-serif;
    font-size: 11pt;
    padding: 10px 15px 10px 15px;
    margin-top: 5px;
    text-decoration: none;
    color: black;
    background-color: #F7CF32;
    cursor: pointer;
    display: block;
    float: right;

    &:hover {
        color: black;
        opacity: 0.8;
    }
`

export const Container = styled.div`
  font-size: 10pt;
  color: #B49726;
  background: #F0F0F0;
  opacity: 0.99;
  height: 100%;
  width: 100%;
  padding-top: 5px;
`
