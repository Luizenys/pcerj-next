
import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import { fetcher } from '../../lib/api';
import Card from 'react-bootstrap/Card';

export default function Imprensa({imprensa, sede}) {
  const CATEGORIES = ["Coordenador Geral", "Coordenadores Adjuntos", "Assessores",  "Atendimento", "Designer Gráfico","Analista de Sistemas e Web Designer"];
  const formatString = (value) => String(value).toLowerCase().trim();
  return (
    <>
      <Header page="INSTITUCIONAL" page2="IMPRENSA" qtd="multiple"></Header>
      <div className="background-allnews">
        <h3>IMPRENSA</h3>
        <div className="sede-ascom">
            <div className="nome"><p>{sede.attributes.nome}</p></div>
            <div className="icon-ascom"><a className="fa fa-home"></a><p>{sede.attributes.endereco}</p></div>
            <div className="icon-ascom"><a className="fa fa-phone"></a><p>{sede.attributes.telefone}</p></div>
            <div className="icon-ascom"><a className="fa fa-envelope"></a><p>{sede.attributes.email}</p></div>
        </div>
        <div className="container-imprensa">
        {CATEGORIES?.map((category, index) => (
            <Card className="card-imprensa" style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title className="title">{category}</Card.Title>
                {imprensa.filter((elemento) => formatString(elemento.attributes.cargo) == formatString(category)).map((card, index) => (
                    <Card.Text className="text">{card.attributes.pessoa}</Card.Text>
                ))}
                </Card.Body>
            </Card>
        ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const imprensaResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/imprensas`);
    const sedeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/sede-ascom`); 
    return {
      props: {       
        imprensa: imprensaResponse.data,
        sede: sedeResponse.data
      }
    }
  }