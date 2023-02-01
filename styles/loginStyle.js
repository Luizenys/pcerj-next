import styled from 'styled-components'

export const Content = styled.div`
  //width: 100%;
  padding: 50px;
  //position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ImageLogo = styled.div`
  padding-top: 112px;
`

const alignCenter = `
align-content : center;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Form = styled.div`
  width: 100%;
  position: relative;
  justify-content: center;
  margin: 0px !important;
`

export const FormInputGroup = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  height: 67px;
  margin-bottom: 11px;
`

export const Title = styled.h1`
  padding-top: 24px;
  padding-bottom: 54px;
  color: black;
`

export const Label = styled.label`
  position: absolute;
  top: 16px;
  left: 20px;
  transition: all 0.3s ease;
  opacity: 0;
  color: black;
  font-family: Roboto;
  font-size: 12px;
  line-height: 14px;
`

export const Input = styled.input`
  display: block;
  width: 300px;
  height: 48px;
  padding-left: 16px;
  transition: all 0.3s linear;
  border: 3px solid #F7CF32;
  border-radius: 8px;
  background-color: #fff;
  color: black;
  font-family: Roboto;
  font-size: 20px;
  line-height: 23px;

  &:focus {
    outline: 0;
  }

  &:not(:placeholder-shown) {
    //padding-top: 26px;
    //padding-bottom: 14px;
    padding-left: 16px;
  }

  &:not(:placeholder-shown) + ${Label} {
    transform: translateY(-12px);
    opacity: 1;
  }

  &::placeholder {
    top: 0;
    color: black;
    font-size: 16px;
    font-style: normal;
    font-family: 'Baloo 2';
    letter-spacing: 0.48px;
    line-height: 19px;
  }
`

export const Error = styled.p`
  height: 30px;
  margin-top: 5px;
  color: #55c32d;
  font-size: 12px;
  line-height: lh(12px, 14px);
`

export const FormInputGroupLoginFields = styled(FormInputGroup)`
width: 300px;
display: flex;
justify-content: center;
`

export const Button = styled.button`
  width: 154px;
  height: 46px;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
  background-color: black;
  opacity: 0.7;
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  color: #F7CF32;
  border: none;

  &:hover {
    opacity: 1;
  }
`