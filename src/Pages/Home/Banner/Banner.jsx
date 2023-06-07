import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bannerOne from '../../../assets/images/banner/banner-image-1-for-assignment.jpg'
import bannerTwo from '../../../assets/images/banner/banner-image-2-for-assignment.jpg'
import bannerThree from '../../../assets/images/banner/banner-image-3.jpg'

const Banner = () => {
    return (
        <Carousel className="-mt-36">
            <div>
                <img src={bannerOne} alt="" />
            </div>
            <div>
                <img src={bannerTwo} alt="" />
            </div>
            <div>
                <img src={bannerThree} alt="" />
            </div>
        </Carousel>
    );
};

export default Banner;