import ReactDOM from 'react-dom'
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export default function MainCarousel(props) {
    const { list } = props;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {list?.map((item, index) =>
                <Carousel.Item key={index} interval={5000}>
                    <img
                    className="carouselimg d-block w-100"
                    src={item.attributes.imagem}
                    alt="First slide"
                    />            
                    <Carousel.Caption className="legendaCarrosel">
                        <h1>{item.attributes.titulo}</h1>
                        <h2>{item.attributes.descricao}</h2>
                    </Carousel.Caption>
                    <Carousel.Caption className="legendaCarroselPolicia">
                        <h2>Polícia Civil do Estado do Rio de Janeiro</h2> 
                    </Carousel.Caption>
                    
                </Carousel.Item>
            )}
        </Carousel>
    )
}