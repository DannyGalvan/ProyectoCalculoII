import ReactPlayer from 'react-player';

const ByPartsTutorialPage = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <section className="mx-10">
                <img
                    src="./byPartsTutorial/1.png"
                    alt="Tutorial"
                    className="mt-10 w-full md:mt-0"
                />
                <img
                    src="./byPartsTutorial/2.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./byPartsTutorial/3.png"
                    alt="Tutorial"
                    className="mt-5 w-full"
                />
                <img
                    src="./byPartsTutorial/4.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./byPartsTutorial/5.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./byPartsTutorial/6.png"
                    alt="Tutorial"
                    className="mt-4 w-full md:mt-0"
                />
                <img
                    src="./byPartsTutorial/7.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./byPartsTutorial/8.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./byPartsTutorial/9.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./byPartsTutorial/10.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./byPartsTutorial/11.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./byPartsTutorial/12.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
            </section>
            <section className="mx-12 flex w-full flex-wrap justify-center gap-8">
                <h3 className="my-2 text-center font-chilanka text-3xl font-bold text-welcome">
                    Videos Recomendados
                </h3>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=93kW5colCAU'}
                        controls
                        width={'100%'}
                        height={'auto'}
                        volume={0.5}
                    />
                </article>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=hvYDrt_Aq2U'}
                        controls
                        width={'100%'}
                        height={'auto'}
                        volume={0.5}
                    />
                </article>
            </section>
        </div>
    );
};

export default ByPartsTutorialPage;
