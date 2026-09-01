export default function CompanyAddSection () {

return (
      <section className="content-width mb-10 p-4 ">
                    <div className="mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-full md:max-w-[1000px] border-solid border-b border-gray-500 pb-20 mb-20">
                        <div className="relative h-[310px]">
                            <figure className="w-full h-full">
                                <img
                                    src="src/assets/family-moving-using-boxes 1.png"
                                    alt="family moving"
                                    className="w-full h-full object-cover md:w-80"
                                />
                            </figure>
    
                            {/* Blue border */}
                            <div className="absolute w-48 h-48 md:w-80 md:h-80 top-5 left-5 border-[10px] border-dinmaegler-blue pointer-events-none">
                                <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 bg-dinmaegler-blue text-white flex flex-col items-center justify-center text-center px-2">
                                    <p className="text-3xl font-bold leading-none">38+</p>
                                    <p className="text-sm leading-tight">års mægler-<br />erfaring</p>
                                </div>
                            </div>
                            {/* Text box anchored to border */}
                        </div>
    
                        <div className="max-w-full md:max-w-[400px]">
                            <h2 className="font-bold text-2xl mb-4">
                                Vi har fulgt danskerne hjem <br />i snart 4 årtier
                            </h2>
                            <p className="font-bold mb-2 text-sm md:text-base">Det synes vi siger noget om os!</p>
                            <p className="mb-2 text-sm md:text-base">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has normal distribution.
                            </p>
                            <p className="text-sm md:text-base">
                                It is a long established fact that a reader will be distracted by the readable
                                content of a page when looking at its layout.
                            </p>
    
                            <div className="flex mt-4 self-center gap-8">
                                <div className="flex">
                                    <figure className="mr-2 bg-dinmaegler-blue-light p-2">
                                        <img src="src/assets/house1.png" alt="house" className="w-10 h-auto" />
                                    </figure>
                                    <div className="flex flex-col justify-center">
                                        <p className="font-bold">4829</p>
                                        <p>boliger solgt</p>
                                    </div>
                                </div>
    
                                <div className="flex">
                                    <figure className="mr-2 bg-dinmaegler-blue-light p-2">
                                        <img src="src/assets/house2.png" alt="house" className="w-10 h-auto" />
                                    </figure>
                                    <div>
                                        <p className="font-bold">158</p>
                                        <p>boliger til salg</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                        <div className="flex">
                            <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                                <img src="src/assets/property1.png" alt="house" className="w-16 md:w-20 h-auto" />
                            </figure>
                            <div>
                                <p className="font-bold mb-2">Bestil et salgstjek</p>
                                <p>Med et Din Mægler Salgstjek
                                    bliver du opdateret på værdien
                                    af din bolig.</p>
                            </div>
                        </div>
    
                        <div className="flex">
                            <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                                <img src="src/assets/maps-and-flags1.png" alt="house" className="w-20 h-auto" />
                            </figure>
                            <div>
                                <p className="font-bold mb-2">74 butikker</p>
                                <p>Hos Din Mægler er din bolig
                                    til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                            </div>
                        </div>
    
                        <div className="flex">
                            <figure className="mr-2 bg-dinmaegler-blue-light p-2 self-start">
                                <img src="src/assets/customer1.png" alt="house" className="w-20 h-auto" />
                            </figure>
                            <div className="flex flex-col justify-center">
                                <p className="font-bold mb-2">Tilmeld køberkartotek</p>
                                <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                            </div>
                        </div>
                    </div>
                </section>
    
)
}