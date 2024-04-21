import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { CarouselData } from './CarouselData';
import {useNavigate} from 'react-router-dom'




const HomeBannerCarousel = () =>{ 
const items = CarouselData.map((banner)=><img src={banner.image} role='presentation' className='w-full h-full cursor-pointer'/>)
// const Navigate = useNavigate();
    return( 
    <AliceCarousel
    disableButtonsControls
    autoPlay
    autoPlayStrategy="none"
    autoPlayInterval={1000}
    animationDuration={1000}
    animationType="fadeout"
        items={items}
        infinite
    />
);
}

export default HomeBannerCarousel;

