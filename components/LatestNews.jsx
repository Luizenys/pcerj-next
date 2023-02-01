import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { Titulo , Categoria, Subtitulo, Button } from '../styles/latestNewsStyle';
import Link from 'next/link';


export default function LatestNews(props) {    
  const { posts } = props;
    
    return (
      <>
        <div className="latest-news-container">
          <Titulo>ÚLTIMAS NOTÍCIAS</Titulo>
          <div>
            {posts.map((post, index) =>(
              index < 5 && 
              <div className="news-pointer" key={post.id}>
                <a href={`news/` + post.id} >
                  <Categoria>{post.attributes.categoria}</Categoria>
                  <p className="subtitulo-latest-news">{post.attributes.titulo}</p>
                </a>
              </div>
            ))}
          </div>
          <Button href="/allNews">VEJA TODAS AS NOTÍCIAS</Button>
        </div>
      </>
    );
  }




  