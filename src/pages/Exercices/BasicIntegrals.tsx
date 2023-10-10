import { Title } from '../../components/cards/Title';
import { Grid } from '../../components/grid/Grid';
import { Card } from 'flowbite-react';
import integral from '/assets/integral.png';

const data = Array.from({ length: 10 }).map((_, i) => `Ejercicio ${i + 1}`);

const BasicIntegrals = () => {
  return (
    <section className="flex flex-col items-center">
      <Title />
      <Grid
        sm={1}
        md={2}
        lg={3}
        className="mt-10 w-full justify-center gap-16 px-20 py-10"
      >
        {data.map((item, index) => (
          <Card
            key={index}
            className="relative h-[18rem] border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]"
          >
            <h1 className="text-center font-chilanka text-2xl">
              {item}
            </h1>
            <div className="absolute right-2 top-2 rounded-full bg-secondary p-2 shadow-[5px_5px_2px_0px_#B46767]">
              <img
                src={integral}
                alt="Bienvenidos"
                className="w-[50px]"
              />
            </div>
          </Card>
        ))}
      </Grid>
    </section>
  );
};

export default BasicIntegrals;
