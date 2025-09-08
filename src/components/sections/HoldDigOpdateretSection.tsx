export default function HoldDigOpdateretSection() {

    return (
        <section className="bg-dinmaegler-blue flex items-center justify-center relative">
            <div className="content-width flex py-15 relative">
                <div>
                    <div className="text-white">
                        <h2 className="h2 mb-2">Hold dig opdateret
                            på salgsprocessen</h2>
                        <p className="max-w-100">Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den  ansvarlige mægler eller butik med vores app. Her kan du også se statistik på <br /> interessen for din bolig i alle vores salgskanaler.</p>
                    </div>
                    <div className="flex gap-3 mt-5">
                        <button className="bg-dinmaegler-white flex items-center gap-2 px-5 py-3 rounded shadow hover:bg-gray-100 transition">
                            <img src="src/assets/play-store.png" alt="Google Play" className="w-5 h-5" />
                            <span className="font-medium text-dinmaegler-blue">Google Play</span>
                        </button>
                        <button className="bg-transparent border border-white flex items-center gap-2 px-5 py-3 rounded hover:bg-white hover:text-dinmaegler-blue transition">
                            <img src="src/assets/apple.png" alt="Apple Store" className="w-5 h-5" />
                            <span className="text-white font-medium group-hover:text-dinmaegler-blue">Apple Store</span>
                        </button>
                    </div>
                    <div className="flex items-end ml-8 absolute right-12 bottom-0">
                        <figure className="z-10">
                            <img src="src/assets/phone1.png" alt="App på telefon 1" className="h-65 w-auto object-contain" />
                        </figure>
                        <figure className="-ml-16 z-0">
                            <img src="src/assets/phone2.png" alt="App på telefon 2" className="h-65 w-auto object-contain" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}