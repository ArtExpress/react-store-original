import React, { useEffect, useState } from 'react'
import "./HeaderImgSlider.css"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

function HeaderImgSlider() {
    const [products, setProducts] = useState([])

  
    async function getProduct() {
        const { data } = await axios.get("https://fakestoreapi.com/products?limit=5")
        setProducts(data)
        console.log(data)
    }
 
    useEffect(() => {
        getProduct()
    }, [])


    let settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slideToShow: 1,
        slideToScroll: 1,
        autoplay: true,
    }

  return (
    <div className='headerImgSlider'>
        <Carousel {...settings}>
            {products.map((product) => (
                <>
                    <div className="product__wrapper">
                        <div className='product__description'>
                            <p>{product.description}</p>
                            <h4>{product.title}</h4>
                        </div>

                        <a>
                            <img src={product.image}  key={product.id} alt="" />
                        </a>
                    </div>
                </>
            ))}
        </Carousel>
    </div>
  )
}

const Carousel = styled(Slider)`
    margin-top: 8px;
    padding: 20px;
    width: 100%;
    height: 100%;

    .slick-list {
        overflow: initial;
    }

    .slick-prev {
    left: -75px;
}

    .slick-next{
    right: -75px;
}
`;

export default HeaderImgSlider