import { Title } from '../../components/cards/Title';
import { Grid } from '../../components/grid/Grid';
import { Card } from 'flowbite-react';
import integral from '/assets/integral.png';
import { Link } from 'react-router-dom';
import { basicProblems as data } from '../../config/basic';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import star from '/assets/estrella.png';

const BasicIntegrals = () => {
  const { get } = useLocalStorage('basic');

  const storedValues = get();

  return (
    <section className="mx-4 flex flex-col items-center">
      <Title />
      <Grid sm={1} md={2} lg={3} className="w-full gap-16 p-10 md:px-20">
        {data.map((item, index) => (
          <Link to={`/BasicIntegrals/Play/${index + 1}`} key={index}>
            <Card className="relative h-[18rem] border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]">
              <h1 className="text-center font-chilanka text-2xl">
                {item.problemTitle}
              </h1>
              <h1 className="text-center font-chilanka text-2xl">
                Tiene {item.steps.length} niveles
              </h1>
              {storedValues.some((value) => value === item.id) && (
                <div className="absolute left-4 top-4 flex flex-col items-center ">
                  <img src={star} className="shadow-star" width={65} />{' '}
                </div>
              )}
              <div className="absolute right-4 top-4 rounded-full bg-secondary p-2 shadow-[5px_5px_2px_0px_#B46767]">
                <img src={integral} alt="Bienvenidos" className="w-[50px]" />
              </div>
            </Card>
          </Link>
        ))}
      </Grid>
    </section>
  );
};

export default BasicIntegrals;
