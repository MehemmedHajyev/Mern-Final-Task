import image from '../../assets/img/villajpg.jpg'
import CardButton from '../../components/Buttons/Button'
import CardSelect from '../../components/selecttions/CardSelect'
const SliderCard = () => {
    return (
        <div className="mb-2 border m-2 text-center rounded-lg border-slate-500 p-0 overflow-auto " >
            <fiqure>
                <img src={image} alt="" />
                <p>Real Estate</p>
            </fiqure>
            <div className="p-3">
                <p>villa</p>
                <p>50.00 USD <del>60.00 USD</del></p>
                <CardSelect />
                <br />
                <CardButton className="py-2 mx-5" />
            </div>


        </div>
    )
}

export default SliderCard