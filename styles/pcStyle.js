import styled from 'styled-components'

export const Titulo = styled.p`
  font-size: 12pt;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding-bottom: 15px;
  color: ${props => props.inputColor || "#C2C2C2"};
  
`
export const Icon = styled.div`
  display: flex;
  color: ${props => props.inputColor || "#C2C2C2"};
  a{
    color: ${props => props.inputColor || "#C2C2C2"};
    font-size: 25px;
    text-decoration: none; 
    margin-right: 10px;
    margin-top: -2px;
  }
`