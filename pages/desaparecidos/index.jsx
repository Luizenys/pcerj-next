
import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import { fetcher } from '../../lib/api';


export default function Desaparecidos({sede}) {
  
  return (
    <>
      <Header page="SERVIÇOS" page2="PESSOAS DESAPARECIDAS" qtd="multiple"></Header>
      <div className="background-allnews">
        <h3>PESSOAS DESAPARECIDAS</h3>
        <p>Acesse abaixo o Portal de Desaparecidos, uma ferramenta de divulgação essencial para auxiliar nas investigações de desaparecimento.</p>
          <div className="portal-desaparecidos" target="_blank">
            <a href="https://desaparecidos.pcivil.rj.gov.br/" className="botao-desaparecidos">
                <p>Portal de Desaparecidos</p>
            </a>
          </div>

        <p>Toda informação é importante para a localização da pessoa desaparecida. Caso tenha alguma informação, entre em contato com a delegacia abaixo:</p>
        <div className="sede-ascom sede-desaparecidos">
            <div className="nome"><p>DDPA - Delegacia de Descoberta de Paradeiros</p></div>
            <div className="icon-ascom"><a className="fa fa-home"></a><p>Avenida Dom Hélder Câmara, 2066 - Jacarezinho, Rio de Janeiro - RJ, 21050-452</p></div>
            <div className="icon-ascom"><a className="fa fa-phone"></a><p>(21) 2202-0338 / (21) 2582-7129</p></div>
            <div className="icon-ascom"><a className="fa fa-envelope"></a><p>servicodescobertadeparadeiros@pcivil.rj.gov.br</p></div>
            <div className="icon-ascom"><a className="fa fa-facebook"></a><p>Delegacia de Descoberta de Paradeiros</p></div>
            <div className="icon-ascom"><a className="fa fa-twitter"></a><p>@DDPA_RJ</p></div>
        </div>
        <div className="social-desaparecidos">
            <div><a className="fa fa-twitter"></a><p>Tweetar</p></div>
            <div className="facebook"><a className="fa fa-facebook"></a><p>Compartilhar</p></div>
        </div>
        
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const sedeResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/sede-ascom`); 
    return {
      props: {       
        sede: sedeResponse.data
      }
    }
  }