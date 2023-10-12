import { useParams } from 'react-router-dom';
import { basicProblems } from '../../config/basic';
import { Col } from '../../components/grid/Col';
import { Grid } from '../../components/grid/Grid';
import { Card } from 'flowbite-react';
import { shuffleArray } from '../../util/shuffle';
import { Failed } from '../../components/modal/Failed';
import { useModals } from '../../hooks/useModals';
import { Success } from '../../components/modal/Success';
import { Final } from '../../components/modal/Final';
import usePlay from '../../hooks/usePlay';

const BasicPage = () => {
  const { id } = useParams();

  const { error, toggleError, success, toggleSuccess, toggleFinal, final } =
    useModals();

  const { currentStep, handleClick, message, problem, selectedItem, process } =
    usePlay({
      id,
      problems: basicProblems,
      toggleError,
      toggleSuccess,
      toggleFinal,
      key: 'basic',
    });

  return (
    <div className="flex flex-col items-center gap-4">
      <Col md="8" className="mb-3 flex flex-col">
        <Card className="rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]">
          <div className="flex flex-col items-center md:flex-row md:justify-around">
            {currentStep !== problem?.steps.length && (
              <img
                src={selectedItem?.image}
                alt="Problema"
                className="max-w-[15%]"
              />
            )}
            <p className="font-chilanka font-bold">
              Resuelto: {currentStep}/{problem?.steps.length}
            </p>
          </div>
        </Card>
      </Col>
      <Col className="flex flex-col items-center justify-center md:flex-row">
        <Col xs="12" md="10" className="px-10 md:px-16">
          <Card
            className={`flex ${
              currentStep !== problem?.steps.length ? 'h-[45vh]' : 'h-[55vh]'
            } flex-col rounded-2xl border-0 bg-container py-2 shadow-[1px_10px_8px_7px_#B46767] ${
              currentStep !== problem?.steps.length
                ? 'md:h-[55vh]'
                : 'md:h-[65vh]'
            }`}
          >
            <p className="text-center font-chilanka font-bold">
              Selecciona la respuesta correcta al enunciado
            </p>
            {message && (
              <div
                className={`flex w-full flex-row rounded-md bg-rose-500 p-2 shadow-lg`}
              >
                <div className="ml-1">
                  <p className="font-bold text-white">{message}</p>
                </div>
              </div>
            )}
            <div className="flex h-[47vh] flex-wrap items-center overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-500">
              {process.map((item, index) => (
                <Grid key={index} md={2} className="gap-3">
                  <article className="flex justify-center">
                    <h3 className="font-chilanka font-bold">
                      Paso {index + 1}
                    </h3>
                    <img src={item.problem.image} className="max-w-[30%]" />
                  </article>
                  <article className="flex justify-center">
                    <h3 className="font-chilanka font-bold">Respuesta</h3>
                    <img src={item.response.image} className="max-w-[30%]" />
                  </article>
                </Grid>
              ))}
            </div>
          </Card>
        </Col>
        <Col
          xs="12"
          md="2"
          className="mt-2 flex flex-row items-start justify-center gap-4 md:h-[53vh] md:flex-col"
        >
          {shuffleArray(problem?.steps[currentStep]?.options ?? []).map(
            (item, index) => (
              <Card
                key={index}
                className="max-w-[30%] cursor-pointer rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767] hover:scale-105 md:max-w-[200px] lg:max-w-[62%]"
              >
                <img
                  key={index}
                  src={item.image}
                  alt={item.image}
                  onClick={() => handleClick(item)}
                />
              </Card>
            )
          )}
        </Col>
      </Col>
      <Final open={final} setOpen={toggleFinal} url='/BasicIntegrals' />
      <Failed open={error} setOpen={toggleError} />
      <Success open={success} setOpen={toggleSuccess} />
    </div>
  );
};

export default BasicPage;
