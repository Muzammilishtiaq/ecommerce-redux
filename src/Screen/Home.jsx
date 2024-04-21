import React from 'react';
import HomeBannerCarousel from '../Components/HomeCarousel/HomeBannerCarousel';
import CarouselHomeSection from '../Components/HomeCarousel/CarouselHomeSection';
import {mens_kurta} from '../ProductData/Men/men_kurta'


function Home() {
    return (
        <div>
            <HomeBannerCarousel  />
            <div className='space-y-10 py-10 fle flex-col justify-center px-5 lg:px-10'>
            <CarouselHomeSection data={mens_kurta} SeactionName='mens_kurta'/>
            </div>
        </div>
    )
}

export default Home;
