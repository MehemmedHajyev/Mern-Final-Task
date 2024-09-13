import Slider from "react-slick";
import './sinpleSlider.css'
import SliderCard from "./SliderCard";
import CardButton from "../../components/Buttons/Button";

export default function SimpleSlider({ dots = false, infinite = true, speed = 500, slidesToShow = 4, slidesToScroll = 1, rows = 2 }) {
    var settings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        rows: rows,
    };


    return (
        <>
            <Slider {...settings}>
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
                <SliderCard />
            </Slider>
            <CardButton className="" content={' Show More'} />
        </>

    );
}