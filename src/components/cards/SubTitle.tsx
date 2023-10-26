import subTitle from "/assets/subTitle.png";
import { Card } from 'flowbite-react';
import { Col } from '../grid/Col';

export const SubTitle = () => {
    return (
        <Col sm="11" className="px-10 md:px-20">
            <Card className="flex flex-row justify-center rounded-3xl border-0 bg-welcome p-0 pt-3 shadow-[8px_10px_6px_3px_#827E6A] md:relative">
                <div>
                    <h1 className="text-center font-could text-5xl text-primary md:text-6xl lg:text-6xl xl:text-6xl">
                        Introduccion
                    </h1>
                    <h2 className="text-center font-could text-5xl text-primary md:text-6xl lg:text-6xl xl:text-6xl">
                        a la
                    </h2>
                    <h2 className="text-center font-could text-5xl text-primary md:text-6xl lg:text-6xl xl:text-6xl">
                        Integración
                    </h2>
                </div>
                <div className="flex justify-center md:absolute md:right-[5%] md:max-w-[25%] lg:right-[5%] xl:right-[5%]">
                    <img
                        src={subTitle}
                        alt="Bienvenidos"
                        className="max-w-[30%] md:max-w-[90%] xl:max-w-full"
                    />
                </div>
            </Card>
        </Col>
    );
}

export default SubTitle
