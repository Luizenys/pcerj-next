
import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import { fetcher } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

export default function Planejamento({resumo}) {

  return (
    <>
      <Header page="INSTITUCIONAL" page2="PLANEJAMENTO ESTRATÉGICO" qtd="multiple"></Header>
      <div className="background-allnews">
        <h3>PLANEJAMENTO ESTRATÉGICO (2020-2025)</h3>
        <p className="pdf-titulo">Fazer o download do PDF</p>
        <div className="pdf-download">
          <a href="planejamento.pdf" download="planejamento_estratégico_2020_2025" target="_blank">
            <p>
              <img src="pdf.png"></img>
              Planejamento Estratégico (2020-2025)
            </p>
          </a>
        </div>
        <p className="pdf-titulo">Breve Resumo do Planejamento Estratégico</p>
        <div className="pdf-resumo" dangerouslySetInnerHTML={{ __html: resumo }}></div>
        <embed src={'planejamento.pdf'} type="application/pdf" width="100%" height="900px"/>
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const resumoPDFResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/planejamento-resumo`);
    const resumo = await markdownToHtml(resumoPDFResponse.data.attributes.resumo); 
     
    return {
      props: {       
        resumo
      }
    }
  }