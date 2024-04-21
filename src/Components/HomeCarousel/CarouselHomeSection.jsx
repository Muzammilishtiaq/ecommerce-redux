import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';

export default function CarouselHomeSection({data,SeactionName}) {

    const [activeIndex, SetActiveIndex] = useState(0)
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };
    const SlidePre = () => SetActiveIndex(activeIndex - 1);
    const SlideNext = () => SetActiveIndex(activeIndex + 1);

    const SyncActivIndex = ({ item }) => SetActiveIndex(item)

    const items = data.map((item) => <HomeSectionCard product={item} />)
    return (
        <div className="relative px-4 lg-px-8">
            <div className="relative p-5">
                <h2 className='text-2xl font-extrabold text=gray-800 py-5'>{SeactionName}</h2>
                <AliceCarousel
                    mouseTracking
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    disableDotsControls
                    disableButtonsControls
                    onSlideChange={SyncActivIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length + 0 && <Button onClick={SlideNext} variant='contained' className='z-5 hover:bg-white' sx={{ position: 'absolute', top: '8rem', right: '0.5rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", bgcolor: 'white', color: 'black' }} />
                </Button>}

                {activeIndex !== 0 && <Button onClick={SlidePre} variant='contained' className='z-5 hover:bg-white' sx={{ position: 'absolute', top: '8rem', left: '-1rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white' }} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", bgcolor: 'white', color: 'black' }} />
                </Button>}
            </div>
        </div>
    )
}
