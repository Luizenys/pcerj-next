
import React, {useState, useEffect} from "react";
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { fetcher } from '../../lib/api';
import Accordion from 'react-bootstrap/Accordion';

export default function Estrutura({estrutura}) {
  
  return (
    <>
      <Header page="INSTITUCIONAL" page2="ESTRUTURA" qtd="multiple"></Header>
      <div className="background-allnews">
        <h3>ESTRUTURA DA POLÍCIA CIVIL DO ESTADO DO RIO DE JANEIRO</h3>
        <Accordion className="accordion">
        {estrutura.map((item, index) => (
            <Accordion.Item className="accordion-item" eventKey={index}>
                <Accordion.Header className="accordion-header">{item.attributes.cargo}</Accordion.Header>
                <Accordion.Body className="accordion-body">
                {item.attributes.nome}
                </Accordion.Body>
            </Accordion.Item>
        ))}
        </Accordion>
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const estruturaResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/estruturas`);
     
    return {
      props: {
        estrutura: estruturaResponse.data,
      }
    }
  }