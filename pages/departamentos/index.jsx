
import React, {useState, useEffect} from "react";
import Header from '../../components/Header';
import { fetcher } from '../../lib/api';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function Departamentos({ delegacias, departamentos }) {
  const CATEGORIES = [{name: "Capital", sigla: "DGPC"}, {name: "Baixada", sigla: "DGPB"}, {name: "Interior", sigla: "DGPI"}, {name: "Homicídios", sigla: "DGHPP"}, {name: "Polícia Técnica", sigla: "DGPTC"}, {name: "Atendimento à Mulher", sigla: "DGPAM"}, {name: "Lavagem de Dinheiro", sigla: "DGCOR-LD"}, {name: "Acervo Cartorário", sigla: "DGPDEAC"}];
  const [category, setCategory] = useState('Capital');
  const [deleg, setDeleg] = useState(delegacias.data);
  const [depart, setDepart] = useState(departamentos.data);
  const [width, setWidth] = useState(0);

  const formatString = (value) => String(value).toLowerCase().trim();

  const filterDelegacias = (new_category) => {
    setCategory(new_category);
    filterDepartamentos(new_category);
    if (delegacias?.data) {
        if (new_category == "Todas") setDeleg(delegacias.data);
        else {
          const filter_delegacias = delegacias.data.filter((elemento) => formatString(elemento.attributes.categoria) == formatString(new_category));
          setDeleg(filter_delegacias);
        }
      }
  }

  const filterDepartamentos = (new_category) => {
    if (departamentos?.data) {
        if (new_category == "Todas") setDepart(departamentos.data);
        else {
          const filter_departamentos = departamentos.data.filter((elemento) => formatString(elemento.attributes.categoria) == formatString(new_category));
          setDepart(filter_departamentos);
        }
      }
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    } 
  }, []);

  return (
    <>
      <Header page="INSTITUCIONAL" page2="DEPARTAMENTOS E DELEGACIAS" qtd="multiple"></Header>
      <div className="background-allnews">
        <h3>DEPARTAMENTOS E DELEGACIAS DA POLÍCIA CIVIL DO ESTADO DO RIO DE JANEIRO</h3>
        <div className="select-delegacia">
        {width <= 1327 &&  <p>Selecione uma Categoria:</p> }
        {width <= 1327 &&    
              
            <select className="combobox"
            value={category}
            onChange={(e) => {filterDelegacias(e.target.value);}}
          >
            {CATEGORIES?.map((value, index) => ( 
              <option className="option-combobox" value={value.name}>{value.name}</option>
            ))}
          </select>
        }
        </div>
        <div className="container-delegacia">
        <Accordion defaultActiveKey="0" className="accordion-delegacia">
        {depart.map((item, index) => (
            <Accordion.Item className="accordion-item" eventKey={0}>
                <Accordion.Header className="accordion-header">{item.attributes.nome}</Accordion.Header>
                <Accordion.Body className="accordion-body">
                <div className="icon-delegacia"><a className="fa fa-home"></a><p>{item.attributes.endereco}</p></div>
                <div className="icon-delegacia"><a className="fa fa-user"></a><p>Responsável: {item.attributes.responsavel}</p></div>
                <div className="icon-delegacia"><a className="fa fa-phone"></a><p>Telefones: {item.attributes.telefone}</p></div>
                </Accordion.Body>
            </Accordion.Item>
        ))}
        {deleg.map((item, index) => (
            <Accordion.Item className="accordion-item" eventKey={index+1}>
                <Accordion.Header className="accordion-header">{item.attributes.numeroDP}ª DP - {item.attributes.localizacao}</Accordion.Header>
                <Accordion.Body className="accordion-body">
                <div className="icon-delegacia"><a className="fa fa-home"></a><p>{item.attributes.endereco}</p></div>
                <div className="icon-delegacia"><a className="fa fa-user"></a><p>Responsável: {item.attributes.responsavel}</p></div>
                <div className="icon-delegacia"><a className="fa fa-phone"></a><p>Telefones: {item.attributes.telefone}</p></div>
                </Accordion.Body>
            </Accordion.Item>
        ))}
        </Accordion>
        {width > 1327 &&
        <Card className="categoria-delegacia">          
            <Card.Body>
            <div>
            {CATEGORIES?.map((value, index) => ( 
                <div className={`delegacia-icon-${category == value.name ? "selectedCategory" : "category"}`} onClick={() => filterDelegacias(value.name)}><a className="fa fa-building-o"></a><p key={index}>{value.sigla} - {value.name}</p></div>  
            ))}
            </div>
            </Card.Body>
        </Card>}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(){
    const delegaciasResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/delegacias`);
    const departamentosResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/departamentos`);
     
    return {
      props: {       
        delegacias : delegaciasResponse,
        departamentos : departamentosResponse
      }
    }
  }