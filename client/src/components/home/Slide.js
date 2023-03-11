import './slide.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
    }
};


function Slide(props) {
    const { title, products } = props;

    return (
        <div className='slide'>
            <div className="top">
                <p>{title}</p>
                <Button variant="contained">View All</Button>
            </div>

            <Divider />

            <Carousel
                responsive={responsive}
                infinite={true}
                draggable={false}
                swipeable={true}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >

                {products.map((product, index) => {
                    return (
                        <Link className="link" to={`/getproduct/${product._id}`} key={index + product.id}>
                            <div className="products_items" >
                                <div className="product_img">
                                    <img src={product.url} alt="product" />
                                </div>
                                <p className="products_name">{product.shortTitle}</p>
                                <p className="products_offer" style={{ color: "#007185" }}>{product.discount}</p>
                                <p className="products_explore">{product.tagline}</p>
                            </div>
                        </Link>
                    )
                })}

            </Carousel>

        </div>
    )
}

export default Slide
