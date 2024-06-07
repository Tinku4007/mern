import React from 'react'
import Product from '../components/Product'
import product from '../constant/Product'

const Home = () => {

  return (
    <>
      <div>
        <div className="container">
        <h1 className='my-5 font-semibold text-3xl'>Products</h1>
          <div className='flex items-start gap-3'>
            {product?.short?.map((item, index) => (
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