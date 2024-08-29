import BlogArtigleSlider from '../../sliders/blogArtigleSlider/blogArtigleSlider'
import SimpleSlider from '../../sliders/sinpleSlider/SimpleSlider'
import BlogArticles from '../BlogArticles/BlogArticles'
import HomesContemporaryFilter from './HomesContemporaryFilter'
const HomesContemporary = () => {
    return (
        <div className=" w-4/5 p-5 mx-auto my-0 ">
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