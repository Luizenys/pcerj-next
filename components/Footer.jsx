import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown'
import { Background, Titulo, Subtitulo } from '../styles/footerStyle';
import Image from 'next/image'
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";


export default function Footer() {
    var info = require('../pages/api/footer.js');
    return (
    <Background>
        <div className="footer">
            <div className="logo-footer">
                <div>
                <Image src={info.image} width='85px' height='78px'/>
                </div>
                <div className="text">
                <b><h1>POLÍCIA CIVIL</h1></b>
                <h3>EM DEFESA DE QUEM PRECISAR</h3>
                </div>
            </div>
            <div>
            
               <Titulo>Endereço</Titulo>
               {/*<Subtitulo><ReactMarkdown remarkPlugins={[remarkBreaks]} rehypePlugins={[rehypeRaw]} children={info.attributes.sede.replace(/\n/gi, "&nbsp; \n")}/></Subtitulo>-->*/}
               <Subtitulo>{info.sede}</Subtitulo>
               <Subtitulo>{info.endereco}</Subtitulo>
            
               <br></br>
               <Titulo>Telefone</Titulo>
               <Subtitulo>{info.telefone}</Subtitulo>
            </div>
            <div >
                <Titulo>Links Úteis</Titulo>
                <div>
                    {info.linksUtil.map((link, index) =>
                        <div key={index}>
                            <a className="link-footer" href={link.link}>{link.nome}</a>
                        </div>
                    )}
                </div>
            </div>
            <div>
                <Titulo>Acesso</Titulo>
                <div>
                    {info.linksAcesso.map((link, index) =>
                        <div key={index}>
                            <a className="link-footer" href={link.link}>{link.nome}</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className="row social-footer">
                <ul>
                  <a href="#" className="fa fa-telegram"></a>
                  <a href="#" className="fa fa-youtube"></a>
                  <a href="#" className="fa fa-twitter"></a>
                  <a href="#" className="fa fa-instagram"></a>
                  <a href="#" className="fa fa-whatsapp"></a>
                  <a href="#" className="fa fa-facebook"></a>
                </ul>                         
        </div>
        <div className="centraliza">
            <Subtitulo>Polícia Civil do Estado do Rio de Janeiro - Copyright © 2017</Subtitulo>                  
        </div>
    </Background>
    );
  }