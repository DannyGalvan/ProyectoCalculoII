import { Col } from '../grid/Col';
import { Card } from 'flowbite-react';
import title from '/assets/title.png';

export const Title = () => {
  return (
    <Col sm="11" className="relative z-0 px-10 md:px-20">
      <Card className="flex flex-row justify-center rounded-3xl border-0 bg-primary p-0 pt-3 shadow-[8px_10px_6px_3px_#827E6A] md:relative">
        <div>
          <h1 className="text-center font-could text-5xl text-welcome md:text-6xl lg:text-6xl xl:text-6xl">
            Ejercicios de
          </h1>
          <h2 className="text-center font-could text-5xl text-welcome md:text-6xl lg:text-6xl xl:text-6xl">
            Práctica
          </h2>
        </div>
        <div className="flex justify-center md:absolute md:right-[0%] md:max-w-[25%] lg:right-[5%] xl:right-[5%] xl:p-12">
          <img
            src={title}
            alt="Bienvenidos"
            className="max-w-[30%] md:max-w-[90%] xl:max-w-full"
          />
        </div>
      </Card>
    </Col>
  );
};
