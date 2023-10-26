import SubTitle from '../../components/cards/SubTitle';
import ReactPlayer from 'react-player';

const BasicTutorialPage = () => {
    return (
        <div className="flex flex-wrap justify-center">
            <SubTitle />
            <section className="mx-10">
                <img
                    src="./basicTutorial/1.png"
                    alt="Tutorial"
                    className="mt-10 w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/2.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/3.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/4.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/5.png"
                    alt="Tutorial"
                    className="w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/6.png"
                    alt="Tutorial"
                    className="mt-4 w-full md:mt-0"
                />
                <img
                    src="./basicTutorial/7.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./basicTutorial/8.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./basicTutorial/9.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
                <img
                    src="./basicTutorial/10.png"
                    alt="Tutorial"
                    className="mt-8 w-full rounded-lg"
                />
            </section>
            <section className='mx-12 flex w-full flex-wrap justify-center gap-8'>
                <h3 className='my-2 text-center font-chilanka text-3xl font-bold text-welcome'>Videos Recomendados</h3>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://www.youtube.com/watch?v=VhRb5A2Gihk'}
                        controls
                        width={'100%'}
                        height={'auto'}
                        volume={0.5}
                    />
                </article>
                <article className="flex h-[35vh] w-full justify-center md:h-[70vh]">
                    <ReactPlayer
                        url={'https://youtu.be/d7Y9Om4KCUM?feature=shared'}
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

export default BasicTutorialPage;
