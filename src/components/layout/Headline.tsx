type HeadlineProps = {
    headlineText: string;
    headlineNumber?: number;

};

export default function Headline({ headlineText, headlineNumber }: HeadlineProps) {

    return (
        <>
            <section className="relative w-full">
                <figure className="z-0">
                    <img src="/src/assets/building.png" alt="" className="w-full" />
                </figure>

                <div className="absolute inset-0 bg-dinmaegler-blue/85 z-10"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex z-20 ">
                    <div className="w-100">
                        <h3 className="h3 text-white text-center">{headlineText}{headlineNumber !== undefined ? headlineNumber : ''}</h3>


                    </div>
                </div>

            </section>
        </>
    )
}