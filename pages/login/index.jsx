

import React, {useState, useEffect} from "react";
import Image from 'next/image'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import { fetcher } from '../../lib/api';
import { setToken, unsetToken } from '../../lib/auth'
import { useUser } from '../../lib/authContext'
import {
    Content,
    FormInputGroup,
    Button,
    FormInputGroupLoginFields,
    Form,
    ImageLogo,
    Input,
    Label,
    Title,
  } from '../../styles/loginStyle'


export default function Login() {
  const [data, setData] = useState({
    identifier: '',
    password: ''
  });

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        identifier: data.identifier,
        password: data.password
      }),
    }
    const responseData = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`, options);
    if (responseData) await getUser(responseData.jwt);
  };

  const getUser = async (token) => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    }
    const resp = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/users/me?populate=*`, options);
    if (resp) setToken(resp);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value});
  };

  return (
    <>
      <Image src="/esse.png" layout="fill" objectFit="cover" />
        
      <Content>
            <ImageLogo>
              <Image src="/../public/logo.png" width="200" height="180" layout="fixed" />
            </ImageLogo>
            <h1 className="title-login">Polícia Civil RJ</h1>
            <form onSubmit={handleSubmit}>
              <Form>
                <FormInputGroupLoginFields>
                  <Input placeholder="Email" 
                  type="text" 
                  name="identifier" 
                  onChange={handleChange} 
                  required />
                  <Label htmlFor="email">Email</Label>
                </FormInputGroupLoginFields>
                <FormInputGroupLoginFields>
                  <Input
                    type="password"
                    placeholder="Senha"
                    name="password" 
                    onChange={handleChange} 
                    required
                  />
                  <Label htmlFor="password">Senha</Label>
                </FormInputGroupLoginFields>
                <a>
                  <FormInputGroupLoginFields>
                    <Button type="submit">Continuar</Button>
                  </FormInputGroupLoginFields>
                </a>
              </Form>
            </form>
          </Content>
      
    </>
  )
}
