import { Card } from 'flowbite-react';
import { Col } from '../../components/grid/Col';
import welcome from '/assets/welcome.png';
import leaves from '/assets/leaves.png';

const Home = () => {
  return (
    <section className="flex flex-col items-center">
      <Col sm="11" className="px-10 md:px-20">
        <Card className="flex flex-row justify-center rounded-3xl border-0 bg-tertiary p-0 py-3 shadow-[8px_10px_6px_3px_#827E6A] md:relative">
          <div>
            <h1 className="text-center font-could text-5xl text-welcome md:text-6xl lg:text-6xl xl:text-9xl">
              Bienvenido
            </h1>
            <h2 className="text-center font-chilanka text-3xl text-workshop md:text-4xl lg:text-5xl xl:text-6xl">
              AL TALLER DE INTEGRALES
            </h2>
          </div>
          <div className="flex justify-center md:absolute md:right-[-85px]  md:max-w-[35%] lg:right-[-140px] lg:max-w-[50%] xl:right-[-100px]">
            <img
              src={welcome}
              alt="Bienvenidos"
              className="max-w-[30%] md:max-w-[90%] xl:max-w-full"
            />
          </div>
        </Card>
      </Col>
      <Col sm="8" className="mt-6 px-10">
        <Card className="relative rounded-3xl border-0 bg-welcome p-0 py-5 shadow-[1px_8px_5px_8px_#827E6A]">
          <h1 className="text-center font-could text-5xl text-tutorial lg:text-7xl xl:text-9xl">
            Tutorial
          </h1>
          <h2 className="text-center font-chilanka text-3xl text-integrate lg:text-5xl xl:text-6xl">
            ¿Como Integrar?
          </h2>
          <img
            src={leaves}
            alt="Hojas"
            className="absolute left-[10%] top-[40%] w-[20%] rotate-90 md:left-[5%] md:top-[10%]"
          />
          <img
            src={leaves}
            alt="Hojas"
            className="absolute  bottom-[40%] right-[10%] w-[20%] -rotate-90 md:bottom-[10%] md:right-[5%]"
          />
        </Card>
      </Col>
    </section>
  );
};

export default Home;
