import BlogArtigleSlider from '../../sliders/blogArtigleSlider/blogArtigleSlider'
import SimpleSlider from '../../sliders/sinpleSlider/SimpleSlider'
import BlogArticles from '../BlogArticles/BlogArticles'
import HomesContemporaryFilter from './HomesContemporaryFilter'


const HomesContemporary = () => {



    return (
        <div className=" max-w-7xl m-auto  ">
            <div className="flex justify-between ">
                <h1>Homes for Contemporary Living
                </h1>
                <HomesContemporaryFilter />
            </div>
            <SimpleSlider />
            <BlogArticles />
            <BlogArtigleSlider />

        </div>
    )
}

export default HomesContemporary