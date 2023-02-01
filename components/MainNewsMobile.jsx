import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { Titulo , Categoria2, Subtitulo2, Button } from '../styles/latestNewsStyle';

export default function MainNewsMobile(props) {
  const { posts } = props;
  var mainPosts = posts.filter((elemento) => elemento.attributes.destaque == true)
  const [index, setIndex] = useState(0);
  
  return (
    <>
        <div className="latest-news-container">
          <Titulo>EM DESTAQUE</Titulo>
          <div>
            {mainPosts.map((post, index) =>(
              index < 4 && 
              <div className="news-pointer" key={index}>
                <Categoria2>{post.attributes.categoria}</Categoria2>
                <div>
                  <Subtitulo2>{post.attributes.titulo}</Subtitulo2>
                  <img src={post.attributes.imagem} width='95px' height='70px'/>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
  );
}