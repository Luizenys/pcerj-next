import { Title, Container } from '../styles/institutionalStyle';
import { Background, GrayLayer, BackgroundInstitutional, BackgroundPortals} from '../styles/homeStyle';
import React, {useState, useEffect} from "react";
import MainCarousel from '../components/Carousel';
import Cards from '../components/Cards'
import News from '../components/News';
import InstitutionalCards from '../components/InstitutionalCards';
import PortalCards from '../components/PortalCards';
import Footer from '../components/Footer';
import HomeHeader from '../components/HomeHeader';
import { fetcher } from '../lib/api';
import { UserProvider, useFetchUser } from '../lib/authContext';


export default function Home({ user, loading = false, portalCards, homeCards, carrossels, allNews, instNews}) {
  var footer = require('../pages/api/footer.js');
  return (
    <UserProvider value={{user, loading}}>
      <HomeHeader /> 
      <Background>
        <MainCarousel 
          list={carrossels.data} 
          style="margin-top: 90px;"
        />
        <div className="centraliza">
          <div className="row card-row">
          {homeCards.data.map((card, index) => (
            index < 3 && 
              <div key={index} className="col centered">
                <Cards image={card.attributes.icone} title={card.attributes.titulo} text={card.attributes.descricao} button={card.attributes.botao} />
              </div>
          ))}
          </div>
        </div>
        <GrayLayer>
          <News news={allNews.data}></News>
        </GrayLayer> 
        <div className="centraliza">
          <div className="row card-row">
          {homeCards.data.map((card, index) =>
            {if (index > 2 && index < 6) {
              return <div key={index} className="col centered">
                <Cards image={card.attributes.icone} title={card.attributes.titulo} text={card.attributes.descricao} button={card.attributes.botao} ></Cards>
              </div>
              }  
            }
          )}
          </div>
        </div>
        <BackgroundInstitutional>
          <Title>INSTITUCIONAL</Title>
          <div className="centraliza">
            <img src={footer.rec}></img>
          </div>
          <div className="centraliza">
            <div className="row card-row">
              {instNews.data.reverse().map((card, index) => (
                index < 4 &&
                  <div key={index} className="col centered">
                    <InstitutionalCards image={card.attributes.imagem} title={card.attributes.titulo} data={card.attributes.data}></InstitutionalCards>
                  </div>
              ))}
            </div>
          </div>
        </BackgroundInstitutional>
        <div className="centraliza">
          <div className="row card-row">
          {homeCards.data.map((card, index) =>
            {if (index > 5 && index < 9) {
              return <div key={index} className="col centered">
                <Cards image={card.attributes.icone} title={card.attributes.titulo} text={card.attributes.descricao} button={card.attributes.botao} ></Cards>
              </div>
              }  
            }
          )}
          </div>
        </div>

        <Title>PORTAL E CANAIS DE ATENDIMENTO</Title>
        <div className="centraliza">
          <img src={footer.rec}></img>
        </div>
        <BackgroundPortals>
          <div className="portal-container">
            <div className="row justify-content-center">
              {portalCards.data.map((card, index) =>
                {if (index < 6) {
                  return <div key={index} className="col d-flex justify-content-center">
                  <PortalCards title={card.attributes.titulo} text={card.attributes.descricao} button={card.attributes.botao} color={card.attributes.cor} icon={card.attributes.icone}></PortalCards>
                </div>   
                  }  
                }
              )}            
            </div>           
          </div>
        </BackgroundPortals>
      </Background>
    </UserProvider>
  )
}

export async function getServerSideProps() {
  const portalCardsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/card-portals`);
  const carrosselsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/carrossels?populate=*`);
  const homeCardsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/card-mains?populate=*`);
  const allNewsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/noticias?sort=data:DESC`);
  const instNewsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/noticia-institucionals?populate=*`);
  
  return{
    props: {
      portalCards: portalCardsResponse,
      carrossels: carrosselsResponse,
      homeCards: homeCardsResponse,
      allNews: allNewsResponse,
      instNews: instNewsResponse,
    }
  }
}