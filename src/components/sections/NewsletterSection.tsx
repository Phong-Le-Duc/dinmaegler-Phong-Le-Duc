import Newsletter from "../common/Newsletter"
import buildingImage from "../../assets/building.png"


export default function NewsletterSection() {

    return (
        <section className="relative w-full mb-20 min-h-[320px] md:min-h-[240px]">
            <figure className="absolute inset-0 z-0">
                <img src={buildingImage} alt="" className="w-full h-full object-cover" />
            </figure>

            <div className="absolute inset-0 bg-dinmaegler-blue/85 z-10"></div>

            <div className="absolute inset-0 z-20 flex items-center">
                <div className="content-width px-4 md:px-0 mx-auto text-center">
                    <h3 className="h3 text-white">Tilmeld dig vores nyhedsbrev og <br />
                        hold dig opdateret på boligmarkedet</h3>

                    <Newsletter />
                </div>
            </div>
        </section>
    )
}