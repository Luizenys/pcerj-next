import React, {useState, useEffect} from "react";
import { useRouter } from 'next/router'
import Header from '../../components/Header';
import Card from 'react-bootstrap/Card';
import markdownToHtml from '../../lib/markdownToHtml';
import { fetcher } from '../../lib/api';

export default function News({news, texto}) {
    const router = useRouter();
 
  return (
    <>
      <Header page="NOTÍCIAS" page2={news.attributes.categoria} qtd="multiple" link="/allNews"></Header>
      <div className="background-new">
        <h3>NOTÍCIAS DA POLÍCIA CIVIL DO ESTADO DO RIO DE JANEIRO</h3>
        <Card className="card" style={{ width: '100%' }}>
          <Card.Body className="body">
            <div className="coluna">
              <Card.Title className="title-mobile">{news.attributes.titulo}</Card.Title>
              <h4 className="bold">{news.attributes.categoria}</h4>
              <h4>{news.attributes.data}</h4>
              <div className="text" dangerouslySetInnerHTML={{ __html: texto }}></div>
            </div>
            <Card.Img className="img" src={news.attributes.imagem} />
          </Card.Body>
        </Card>
        <div className="button-arrow">
          <a onClick={() => router.back()} className="fa fa-arrow-left"></a>
          <a onClick={() => router.back()} className="button" href="/">Voltar</a>
        </div>
      </div>

    </>
  )
}

export async function getServerSideProps({params}){
  const { slug } = params;
  const newsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/noticias/${slug}`);
  const texto = await markdownToHtml(newsResponse.data.attributes.texto); 
  return {
    props: {
        news: newsResponse.data,
        texto,
    }
  }
}

