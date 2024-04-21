import React from 'react';
import AddressCard from '../Components/Forms/AddressCard'
import OrderTracking from '../Components/OrderCart/OrderTracking';
import { Grid,Box } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { StarBorder } from '@mui/icons-material';

export default function OrderDetailPage() {
    return (
        <div className='px-5 lg:px-20'>
            <h1 className='font-bold text-lg py-7'>Delivery Address</h1>
            <AddressCard />
            <div className="py-20">
                <OrderTracking />
            </div>
            <Grid className='space-x-5' container>
                {[1,1,1].map((item)=>{
                    return(
                        <Grid item container className='shadow-xl rounded-md p-5 border' sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>
                            <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*kSkoda8hLdJeq76FTMFxnw.jpeg" alt="" />
                            <div className='space-y-2 ml-5'>
                                <p className='font-semibold'>Men Slim Mid Black Jense</p>
                                <p className='space-x-5 opacity-50 text-sm font-semibold'><span>color:pink <span>size : M</span></span></p>
                                <p>Seller : Linaria</p>
                                <p>$1099</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item>
                        <Box sx={{color:deepPurple[500]}}>
                            <StarBorder sx={{fontSize:'2rem'}} className='px-2 text-5xl'/>
                            <span>Rate & Review Product</span>
                        </Box>
                    </Grid>
                </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}
