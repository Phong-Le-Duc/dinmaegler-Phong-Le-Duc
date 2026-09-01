export default function WriteUsForm() {

    return (
        <>
            {/* Write us FORMULAR */}
            <div className="border border-gray-300 p-10 rounded-[3px] shadow-md max-w-lg">

                <form className="login-form flex flex-col gap-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div>
                            <label htmlFor="fullname">Navn:</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                required
                                placeholder="Indtast dit navn"
                                className="border border-gray-300 p-1 rounded-[3px] w-full"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Indtast din email"
                                className="border border-gray-300 p-1 rounded-[3px] w-full"
                            />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="subject">Emne:</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                                placeholder="Indtast din email"
                                className="border border-gray-300 p-1 rounded-[3px] w-full"
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="message">Besked:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Indtast din besked"
                                className="border border-gray-300 p-1 rounded-[3px] w-full"
                            />
                        </div>

                        <div className="col-span-2 flex items-center gap-2 mt-2">
                            <input
                                type="checkbox"
                                id="accept"
                                name="accept"
                                required
                                className="accent-dinmaegler-blue"
                            />
                            <label htmlFor="accept" className="text-sm">
                                Ja tak, jeg vil gerne modtage Din Mæglers nyhedsbrev.
                            </label>
                        </div>


                    </div>



                    <button type="submit" className="border border-gray-300 p-1 rounded-[3px] bg-dinmaegler-blue text-white">
                        Opret bruger
                    </button>
                </form>

            </div >
        </>
    )
}