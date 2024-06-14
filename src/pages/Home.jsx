import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { useNavigate } from 'react-router-dom'
import { getLocalStorage } from '../utils/LocalStorageUtills'
import { getProduct } from '../utils/api'

const Home = () => {
  const [product, setProduct] = useState([])
  const userId = getLocalStorage('user')._id
  const products = async () => {
    try {
      const response = await getProduct(userId)
      console.log(response)
      setProduct(response?.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    products()
  }, [])

  return (
    <>
      <div>
        <div className="container">
          <h1 className='my-5 font-semibold text-3xl'>Products</h1>
          <div className='grid grid-cols-4 gap-3'>
            {product?.map((item, index) => (
              <Product item={item} key={index} />
            ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home