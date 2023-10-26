import ReactPlayer from 'react-player';

const BySubstitutionTutorialPage = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <section className="mx-10">
                <img
                    src="./bySubstitutionTutorial/1.png"
                    alt="Tutorial"
                    className="mt-10 w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/2.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/3.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/4.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/5.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/6.png"
                    alt="Tutorial"
                    className="mt-4 w-full md:mt-0"
                />
                <img
                    src="./bySubstitutionTutorial/7.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./bySubstitutionTutorial/8.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./bySubstitutionTutorial/9.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./bySubstitutionTutorial/10.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./bySubstitutionTutorial/11.png"
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
                        url={'https://www.youtube.com/watch?v=UZyG4jCBMgU'}
                        controls
                        width={'100%'}
                        height={'auto'}
                        volume={0.5}
                    />
                </article>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=5dREssqdlBM'}
                        controls
                        width={'100%'}
                        height={'auto'}
                        volume={0.5}
                    />
                </article>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=Y-tZ2gHWdtw'}
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

export default BySubstitutionTutorialPage;
