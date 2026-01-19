import FormContact from "../components/common/FormContact"
import Headline from "../components/layout/Headline"


export default function Contact() {

    return (
        <>


            <div className="">
                <Headline headlineText="Kontakt os" />
            </div>


            <div className="flex justify-center gap-15 my-10 flex-wrap">

                <div className="flex flex-col  gap-6">
                    <div className="p-2 max-w-md mt-10">
                        <h3 className="h3 mb-4">Vi sidder klar til at besvare dine spørgsmål</h3>
                        <p>Der kan opstå tvivl om mange ting nå man gerne vil, eller er i gang med at sælge sin bolig. Vores medarbejdere sider klar alle ugens dage til at svare på dine spørgsmål.</p>
                    </div>
                    <div className="w-full flex flex-col items-center">
                        <FormContact />
                    </div>
                </div>

                <div>
                    <div className="bg-dinmaegler-white pt-10 p-5 w-fullflex border border-gray-300 rounded-[3px] w-80 items-center justify-center mt-62.5">
                        <div className="flex flex-col items-center border-b border-gray-300 pb-5 mb-5">
                            <figure>
                                <img src="src/assets/phone-round-Icon.png" alt="" />
                            </figure>
                            <div className="text-center">
                                <p className="font-semibold">Ring til os</p>
                                <p>+45 7070 4000</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center border-b border-gray-300 pb-5 mb-5">
                            <figure>
                                <img src="src/assets/mail-round-icon.png" alt="" />
                            </figure>
                            <div className="text-center">
                                <p className="font-semibold">Send en mail</p>
                                <p>4000@dinmaegler.com</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center mb-5">
                            <figure>
                                <img src="src/assets/map-round-icon.png" alt="" />
                            </figure>
                            <div className="text-center">
                                <p className="font-semibold">Besøg butikken</p>
                                <p>Stændertorvet 78, <br /> 4000 Roskilde</p>

                                {/* <p>55.64152356357667, 12.080469112533445</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STORE LOCATION MAP */}
            <section className="mt-4 h-120">

                <iframe
                    className=" block"
                    width="100%"
                    height="90%"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps?q=55.64152356357667,12.080469112533445&z=15&output=embed`}
                    allowFullScreen
                    title="Map"
                />
            </section>
        </>
    )
}