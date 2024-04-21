import React from 'react';
import { Grid, Box, Rating, Avatar } from '@mui/material';

export default function ProductReviewCard() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={1}>
                    <Box >
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: '#9155fd' }}>R</Avatar>
                    </Box>
                </Grid>
                <Grid item xs={9}>
                    <div className='space-y-2'>
                        <p>ali</p>
                        <p>April 5 2023 </p>
                    </div>
                    <Rating value={4.5} name='half-rating' readOnly precision={.5} />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                    <p>nice product, i love this product  </p>
                </Grid>
            </Grid>
        </div>
    )
}
