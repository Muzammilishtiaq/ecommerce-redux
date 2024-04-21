import React from 'react';
import "./ProductCard.css";
import {useNavigate} from 'react-router-dom'

export default function ProductCard({product}) {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate('/product/5')} className=' productcard w-[15rem] m-3 transition-all cursor-pointer'>
      <div className='h-[20rem'>
        <img src={product.image} alt="" className='h-[20rem] w-full object-cover object-left-top' />
      </div>
      <div className="textpart bg-white p-3">
        <div>
          <p className='font-bold opacity-60'>{product.brand}</p>
          <p >{product.title}</p>
        </div>
        <div className='flex items-center space-x-2 '>
          <p className='font-sans'>{product.selling_price}</p>
          <p className='line-through opacity-50'>{product.price}</p>
          <p className='text-green-600 font-semibold'>{product.disscount}</p>

        </div>
      </div>
    </div>
  )
}
