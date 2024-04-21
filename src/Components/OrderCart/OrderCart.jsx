import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import {useNavigate} from 'react-router-dom'
export default function OrderCart() {
    const navigate = useNavigate()
    return (
        <div onClick={()=>navigate('/account/order/5')}  className='p-5 shadow-md sh-black hover:shadow-xl border cursor-pointer'>
            <Grid container spacing={3} sx={{ justifyContent: 'space-between' }}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer space-x-5">
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*kSkoda8hLdJeq76FTMFxnw.jpeg" alt="" />
                        <div className="ml- space-y-2">
                            <p className="">Slim Mid Rise Black Jeans</p>
                            <p className="opacity-50 text-xs font-semibold">Size: Size</p>
                            <p className="opacity-50 text-xs font-semibold">Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>$1099</p>
                </Grid>
                <Grid item xs={3}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: '15px', height: '15px' }} className='text-green-600 mr-3 text-sm' />
                            <span>
                                Delivered On March 09
                            </span>
                        </p>
                        <p className='text-sm'>Your Has Been Delivered</p>
                    </div>}
                    {false && <p>
                        <span>Expected Delivery On Mar 03</span></p>}
                </Grid>
            </Grid>
        </div>
    )
}
