import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ item }) => {
    return (
        <Link to={`productdetails/${item.id}`} className='border p-2 border-[#ccc] cursor-pointer'>
            <img src={`http://localhost:8000/uploads/${item.image}`} alt={item.productName} />
            <div className='pt-2'>
                <h1>{item.product_name}</h1>
                <p className='font-semibold'>FROM ₹{item.price}</p>
                <p className='font-semibold'>{item.replacement}</p>
            </div>
        </Link>

    )
}

export default Product