import React from 'react'
import {Link} from 'react-router-dom'

const Product = ({item}) => {
    return (
        <Link to={`productdetails/${item.id}`} className='border p-2 border-[#ccc] cursor-pointer'>
            <img className='h-[252px] w-full' src={item.src} alt="" />
            <div className='pt-2'>
                <h1>{item.product_name}</h1>
                <p className='font-semibold'>FROM ₹{item.price}</p>
            </div>
        </Link>

    )
}

export default Product