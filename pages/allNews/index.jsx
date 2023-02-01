import React, {useState, useEffect} from "react";
import { Titulo , Categoria2, Subtitulo2 } from '../../styles/latestNewsStyle';
import Header from '../../components/Header';
import Card from 'react-bootstrap/Card';
import { fetcher } from '../../lib/api';
import ReactPaginate from 'react-paginate';

export default function AllNews({ allNews, }) {
  const CATEGORIES = [{name: "Todas"}, {name: "Capital"}, {name: "Baixada"}, {name: "Interior"}, {name: "Especializadas"}, {name: "Atendimento à Mulher"}, {name: "Homicídios"}, {name: "Lavagem de Dinheiro"}, {name: "Órgãos"}];
  const [category, setCategory] = useState('Todas');
  const [news, setNews] = useState(allNews.data);
  const [width, setWidth] = useState(0);
  const [pagination, setPagination] = useState(allNews.meta.pagination);
  
  const PER_PAGE = pagination.pageSize;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    } 
  }, []);
  
  
  const formatString = (value) => String(value).toLowerCase().trim();

  const getNews = async (category, page, pageSize) => {
    var url = `noticias?filters[categoria][$containsi]=${category}&pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=data:DESC`
    if (category == CATEGORIES[0].name) url = `noticias?pagination[page]=${page}&pagination[pageSize]=${pageSize}&sort=data:DESC`;

    const resp = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/${url}`);
    if (resp) {
      if (resp.data) setNews(resp.data);
      if (resp.meta?.pagination) setPagination(resp.meta.pagination);
    }
  }

  const filterNews = async (new_category) => {
    setCategory(new_category);
    await getNews(new_category, pagination.page, PER_PAGE);
  }

  const paginate = async ({ selected }) => {
    await getNews(category, selected+1, PER_PAGE);
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Header page="NOTÍCIAS" qtd="one"></Header>
      <div className="background-allnews">
        <h3>NOTÍCIAS DA POLÍCIA CIVIL DO ESTADO DO RIO DE JANEIRO</h3>
        {width <= 900 &&  <p>Selecione uma Categoria:</p> }
        {width > 900 ?
          <div className="category-buttons">
            {CATEGORIES?.map((value, index) => ( 
              <a
                key={index}
                className={`button-${category == value.name ? "selectedCategory" : "category"}`}  
                onClick={() => filterNews(value.name)}
              >
                {value.name}
              </a> 
            ))}
          </div>
        :
          <select className="combobox"
            value={category}
            onChange={(e) => {filterNews(e.target.value);}}
          >
            {CATEGORIES?.map((value, index) => ( 
              <option className="option-combobox" value={value.name}>{value.name}</option>
            ))}
          </select>
        }
        <br />
        Resultados ({pagination?.total})
        {news.map((card, index) => (
          <a href={`news/` +card.id}>
          {width > 900 ?
          <Card className="card" style={{ width: '100%' }} key={index}>
            <Card.Body className="body">
              <Card.Img className="img" src={card.attributes.imagem} />
              <div className="coluna">
                <Card.Title className="title">{card.attributes.titulo}</Card.Title>             
                  <h4 className="bold">{card.attributes.categoria}</h4>
                  <h4>{card.attributes.data}</h4>        
              </div>
            </Card.Body>
          </Card>
          :
          <div className="latest-news-container">      
            <div className="news-pointer" key={index}>
                  <Categoria2>{card.attributes.categoria}</Categoria2>
                  <div className="mobile-height">
                    <Subtitulo2>{card.attributes.titulo}</Subtitulo2>
                    <img src={card.attributes.imagem} width='95px' height='70px'/>
                  </div>
            </div>
          </div>
          }
          </a>
        ))}
        <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo >"
        onPageChange={paginate}
        pageRangeDisplayed={2}
        pageCount={pagination.pageCount}
        marginPagesDisplayed={2}
        previousLabel="< Anterior"
        renderOnZeroPageCount={null}
        activeClassName={'item-pages active-page'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        onClick={scrollToTop}
      />
      </div>
    </>
  )
}

export async function getServerSideProps(){
  const allNewsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/noticias?pagination[page]=1&pagination[pageSize]=3&sort=data:DESC`);
   
  return {
    props: {
      allNews: allNewsResponse,
    }
  }
}
