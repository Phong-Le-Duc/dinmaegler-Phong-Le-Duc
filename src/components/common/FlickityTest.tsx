import 'flickity/css/flickity.css';
import type { House } from "../../Types";
import Flickity from 'react-flickity-component';


const flickityOptions = {
    initialIndex: 0,
    wrapAround: true,
    pageDots: true
}


export default function FlickityTest({ house }: { house: House }) {


    return (
        <>

            <Flickity
                className={'carousel'}
                elementType={'div'}
                options={flickityOptions}
                reloadOnUpdate
            >
                {house?.images?.map((image, index) => (
                    <img className="max-w-full max-h-[70vh] object-contain block mx-auto" key={index} src={image.url} alt={`House image ${index + 1}`} />
                ))}

            </Flickity>
        </>
    )
}