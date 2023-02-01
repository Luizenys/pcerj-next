
import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import { Titulo , Categoria, Subtitulo, Button } from '../styles/latestNewsStyle';
import Carousel from 'react-bootstrap/Carousel';

export default function MainNews(props) {
  const { posts } = props;
  var mainPosts = posts.filter((elemento) => elemento.attributes.destaque == true)
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const firstNews = () => {
    setIndex(0);
  };

  const secondNews = () => {
    setIndex(1);
  };

  const thirdNews = () => {
    setIndex(2);
  };

  const fourthNews = () => {
    setIndex(3);
  };

  
  return (
    <div className="main-news-container">
    <Titulo>EM DESTAQUE</Titulo>
    <Carousel fade activeIndex={index} onSelect={handleSelect} slide={false} controls={false} indicators={false}>
      {mainPosts.map((post, index) => (
        index < 4 && 
        <Carousel.Item key={index} interval={5000}>
          <img
            className="d-block"
            src={post.attributes.imagem}
            alt="First slide"
            width="1000px"
            height="600px"
          />
          <Carousel.Caption className="news-options">           
              <div onClick={firstNews} className={index === 0 ? 'news-chosen' : ''}>
                <h4>{mainPosts[0].attributes.categoria}</h4>
                <p>{mainPosts[0].attributes.titulo}</p>              
              </div>       
              <div onClick={secondNews} className={index === 1 ? 'news-chosen' : ''}>
                <h4>{mainPosts[1].attributes.categoria}</h4>
                <p>{mainPosts[1].attributes.titulo}</p>
              </div>
              <div onClick={thirdNews} className={index === 2 ? 'news-chosen' : ''}>
                <h4>{mainPosts[2].attributes.categoria}</h4>
                <p>{mainPosts[2].attributes.titulo}</p>
              </div>           
              <div onClick={fourthNews} className={index === 3 ? 'news-chosen' : ''}>
                <h4>{mainPosts[3].attributes.categoria}</h4>
                <p>{mainPosts[3].attributes.titulo}</p>
              </div>       
            </Carousel.Caption>
          
            <Carousel.Caption className="news-caption">
            <div><a href={`news/` + mainPosts[index].id}>
              <h4>{mainPosts[index].attributes.categoria}</h4>
              <p>{mainPosts[index].attributes.titulo}</p>
              <h4>{mainPosts[index].attributes.data}</h4></a>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
}