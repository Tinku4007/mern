import React from 'react'

const Product = ({item}) => {
    return (
        <div className='border p-2 border-[#ccc] w-[16%]'>
            <img src={item.src} alt="" />
            <div className='pt-2'>
                <h1>{item.product_name}</h1>
                <p>FROM ₹{item.price}</p>
            </div>
        </div>

    )
}

export default Product