import React from 'react';
import './banner.scss';
import Carousel from 'react-material-ui-carousel';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

function Banner() {

    //images for the carousel
    const data = [
        "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
        "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
    ]

    return (
        <div className='banner'>
            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                interval = {5000}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 0,
                        marginTop: -22,
                        height: "104px",
                    }
                }}
                NextIcon={<KeyboardDoubleArrowRightIcon />}
                PrevIcon={<KeyboardDoubleArrowLeftIcon />}
            >
                {
                    data.map((img, i) => {
                        return (
                            <div key={i}>
                                <img src={img} alt="img" key={i} className="banner_img" />
                            </div>
                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Banner
