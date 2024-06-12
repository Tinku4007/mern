import React from 'react'
import productList from '../constant/ProductList'

const ProductDetails = () => {
  return (
    <div>
      <div className="container">
        {/* <h1 className='my-5 font-semibold text-3xl'>Products</h1> */}
        <div className='flex items-start pt-5 gap-2'>
          {productList?.short?.map((item, index) => (
            <>
              <div className='w-[41%] flex'>
                <div className='w-[10%]'></div>
                <div className='w-[80%]'>
                  <div  className='border text-center flex justify-center'>
                  <img className='' src={item.src} alt="" />
                  </div>
                  <div className='flex justify-between mt-8'>
                    <button className='bg-[#ff9f00] py-4 px-10 rounded-sm text-white'>Add TO Cart</button>
                    <button className='bg-[#fb641b] py-4 px-10 rounded-sm text-white'>Buy Now</button>
                  </div>
                </div>
              </div>
              <div className='w-[59%] flex flex-col items-start gap-3'>
                <h1 className='text-lg'>{item.product_name}</h1>
                <p className='bg-[green] py-1 px-4 inline-block text-white rounded-xl'>{item.rating}</p>
                <span className=' inline-block text-[green] font-semibold rounded-md'>Special price</span>
                <h2 className='text-3xl font-semibold'>₹ {item.price}</h2>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails