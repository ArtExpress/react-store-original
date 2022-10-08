import React, { useEffect, useState } from 'react'
import "./Widgets.css"
import axios from"axios"

function Widgets() {
    const [products, setProducts] = useState([])

    async function getProduct() {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        setProducts(data)
        console.log(data)
    }
 
    useEffect(() => {
        getProduct()
    }, [])

  return (
    <div className='widgets'>
        <div className="widgets__left">
            <h3>Explore Deals</h3>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2022/PEAS/GW/DCC_PEAS_T5_10_06_TrafficDriver_1x._SY304_CB608979873_.jpg" alt="" />
            <a>
                <p><span className="blue">Explore more deals</span></p>
            </a>
        </div>
        
            <div className="widgets__center">
                {products.filter(product => product.id === 13).map((product) => (
                    <>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt="" />
                    </>
                ))}
                    <a>
                        <p><span className="blue">Shop Now</span></p>
                    </a>
            </div>

            <div className="widgets__right">
                <div className="widgets__rightTop">
                    <h3>Early Bird Sale!</h3>
                    <h3>This week only!</h3>
                        <a>
                            <p><span className="blue">Learn More</span></p>
                        </a>
            </div>
                <div className="widgets__rightBottom">
                    {products.filter(product => product.id === 9).map((product) => (
                        <img src={product.image} alt="" />
                    ))}
                    <a>
                        <p><span className="blue">Shop Now</span></p>
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Widgets