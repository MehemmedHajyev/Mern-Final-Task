import Slider from "react-slick";
import '../sinpleSlider/sinpleSlider.css'
import BlogArtigleCard from "./blogArtigleCard";

export default function BlogArtigleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // rows: 1,
    };
    return (<>
        <h2 className="text-center">Blog & Articles</h2>
        <Slider className="mb-5" {...settings}>
            <BlogArtigleCard />
            <BlogArtigleCard />
            <BlogArtigleCard />
            <BlogArtigleCard />
            <BlogArtigleCard />
            <BlogArtigleCard />

        </Slider>

    </>
    );
}