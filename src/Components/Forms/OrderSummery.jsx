import React from 'react'
import AddressCard from './AddressCard'
import CartItem from '../CartItem/CartItem'
import { Button } from '@mui/material'

export default function OrderSummery() {
  return (
    <div className='p-5 shadow-lg rounded-s-md border'>
      <AddressCard/>

      <div className='lg:grid grid-cols-3 lg:px-16 relative '>
      <div className="col-span-2 mt-5">
       {[1,1,1].map(item =>(<CartItem />))}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg-mt-0">
        <div className="border">
          <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
          <hr />
          <div className="space-y-3 font-semibold">
            <div className="flex justify-between pt-3">
              <span className="">Price</span>
              <span className="text-green-600">$4697</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="">Disccount</span>
              <span className="text-green-600">333</span>
            </div>
            <div className="flex justify-between pt-3">
              <span className="">Delivery Charge</span>
              <span className="text-green-600">Free</span>
            </div>
            <div className="flex justify-between pt-3 mb-10">
              <span className="">Total Amount</span>
              <span className="text-green-600">$3333</span>
            </div>
            <Button variant='contained' className='w-full mt-5 ' sx={{ px: '2.5rem', py: '.7rem', bgcolor: '#9155fd' }}>
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
