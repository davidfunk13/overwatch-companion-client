import { FC } from 'react'
import { Carousel } from 'antd';
import { CSSProperties } from 'react';

const contentStyle: CSSProperties = {
    height: '50vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const CarouselScroller: FC = () => {
    return (
        <Carousel autoplay effect="fade">
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default CarouselScroller