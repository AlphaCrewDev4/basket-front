import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: {
        items: 1,
    },
}

export const InstructionSlider = ({ instructions }) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        let instructionsArr = [];
        for (const instruction of instructions) {
            instructionsArr = [
                ...instructionsArr,
                <div className='instruction__slider__item' onDragStart={handleDragStart}>
                    <div className="title-content">
                        <div className="title-2">
                            <h2>{instruction.title}</h2>
                        </div>
                    </div>
                    <div className="text-content">
                        <p>{instruction?.description}</p>
                    </div>
                    <div className="slider__description">
                        <p>{instruction.text}</p>
                    </div>
                    <div className="slider__image">
                        <img src={instruction.image} />
                    </div>
                </div>
            ];
        }
        setItems([
            ...instructionsArr,
        ]);
    }, [instructions]);

    const handleDragStart = (e) => e.preventDefault();

    return (
        <div className="question-carrousel">
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                autoHeight
            />
        </div>
    )
}
