import React, { useEffect, useState } from 'react'
import "./PopularItems.css"
import PopularItem from './ui/PopularItem'
import axios from "axios"

function Popular() {
  const [products, setProducts] = useState([])

  async function getProduct() {
      const { data } = await axios.get("https://fakestoreapi.com/products")
      setProducts(data)
  }

  useEffect(() => {
      getProduct()
  }, [])

  return (
    <div className='popular'>
        <h5>What's Popular</h5>

        <div className="popularItems__wrapper">
        {products
        .filter(product => product.rating.rate >= 4.4 )
        .slice(0, 4)
        .map((product) => (
            <>
              <PopularItem 
              image={product.image} 
              key={product.id} 
              rating={product.rating.rate} 
              category={product.category} />
            </>
        ))}
        </div>
    </div>
  )
}

export default Popular