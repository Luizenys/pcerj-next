import Head from 'next/head';
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Image from 'next/image';
import { Background, Logo, Button } from '../../styles/mainHeaderStyle';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from 'next/link'


export default function Header(props) {
  const { titleName } = props;
  const qtd = props.qtd;
  var principaisItens = require('../../pages/api/header.js');

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showDrop, setShowDrop] = useState(false);
  const [showDrop2, setShowDrop2] = useState(false);
  const [width, setWidth] = useState(0);

  const logout = () => {
    unsetToken();
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      setShow(window.scrollY > lastScrollY); 
      setLastScrollY(window.scrollY); 
    }
  };

  const showDropdown = (e)=>{
      setShowDrop(!showDrop);
  }
  const hideDropdown = e => {
      setShowDrop(false);
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    } 
  }, []);
  
  return (
    <>
      {titleName && 
        <Head>
          <title>{titleName}</title>
        </Head>
      }

      <div className={`navActive ${show && 'navHidden'}`}>
        <Background>
          <div className="tela">
            <div className="header">
              <div>    
              <Link href="/"> 
                <div className="logo-header">
                    <Image src={principaisItens.image} width='85px' height='78px'/>
                  
                  <div className="text">
                    <b><h1>POLÍCIA CIVIL</h1></b>
                    <h3>EM DEFESA DE QUEM PRECISAR</h3>
                  </div>
                </div>
                </Link>
              </div>
              <div>
                <div className="row d-none d-md-block socialMedia">
                  <ul className="menuSocial">
                    <a href="#" className="fa fa-telegram"></a>
                    <a href="#" className="fa fa-youtube"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-whatsapp"></a>
                    <a href="#" className="fa fa-facebook"></a>
                    
                  </ul>                  
                </div>
                <div className="row d-none d-lg-block">           
                  <ul className="menuList">              
                    {principaisItens.links.map((item, index) =>
                      <li key={index}><a href={item.link}>{item.nome}</a></li>
                    )}           
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </Background>
        <Navbar className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        {width > 900 ?
          <NavDropdown title="MENU" className="menuDropdown2" id="basic-nav-dropdown" show={showDrop} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {principaisItens.linksMenu.map((item, index) =>              
                    <NavDropdown.Item key={index} className="menuDropdownItem" href={item.link}>
                      {item.nome}
                    </NavDropdown.Item>
                  )}
          </NavDropdown>
          :
          <NavDropdown title="" className="menuDropdown2" id="basic-nav-dropdown" show={showDrop} onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
            {principaisItens.linksMenu.map((item, index) =>              
                    <NavDropdown.Item key={index} className="menuDropdownItem" href={item.link}>
                      {item.nome}
                    </NavDropdown.Item>
                  )}
          </NavDropdown>
        }
          <a className="fa fa-bars"></a>
          
          {qtd === 'one' && width > 900 &&
          <div className="navbar-label">{props.page}</div>}
          {qtd === 'multiple' && width > 900 &&
          <a href={props.link}><div className="navbar-label2">{props.page}</div></a>}
          {qtd === 'multiple' && width > 900 &&
          <div className="navbar-label">{props.page2}</div>}
        </Navbar.Collapse>
        
      </Navbar>
      </div>
      
      
    </>
  )
}
  