import { useParams } from 'react-router-dom';
import { Option, Process, basicProblems } from '../../config/basic';
import { Col } from '../../components/grid/Col';
import { Grid } from '../../components/grid/Grid';
import { Card } from 'flowbite-react';
import { useState } from 'react';
import { shuffleArray } from '../../util/shuffle';
import { Failed } from '../../components/modal/Failed';
import { useModals } from '../../hooks/useModals';
import { Success } from '../../components/modal/Success';
import { Final } from '../../components/modal/Final';

const BasicPage = () => {
  const { id } = useParams();
  const { error, toggleError, success, toggleSuccess, toggleFinal, final } =
    useModals();
  const problem = basicProblems.find((item) => item.id === parseInt(id ?? '0'));
  const initialOptions: Option = {
    image: problem?.problemImage ?? '',
    correct: false,
  };

  const [message, setMessage] = useState('');

  const [currentStep, setCurrentStep] = useState(0);

  const [selectedItem, setSelectedItem] = useState<Option | null>(
    initialOptions
  );

  const [process, setProcess] = useState<Process[]>([]);

  const handleClick = (item: Option) => {
    if (item.correct) {
      const current = currentStep + 1;
      setProcess([...process, { problem: selectedItem!, response: item }]);
      setSelectedItem(item);
      setCurrentStep(current);
      current === problem?.steps.length && toggleFinal();
      toggleSuccess();
      setMessage('');
    } else {
      toggleError();
      const step = problem?.steps[currentStep];
      setMessage(step?.advice ?? '');
      setCurrentStep(0);
      setSelectedItem(initialOptions);
      setProcess([]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <Col md="8" className="flex flex-col">
        <Card className="flex flex-col justify-center rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]">
          <div className="flex justify-center">
            <img src={selectedItem?.image} alt="" className="max-w-[15%]" />
          </div>
        </Card>
      </Col>
      <Col className="flex flex-col items-center justify-center md:flex-row">
        <Col xs="12" md="10" className="px-10 md:px-16">
          <Card className="flex h-[53vh] flex-col overflow-y-auto rounded-2xl border-0 bg-container shadow-[1px_10px_8px_7px_#B46767]">
            {message && (
              <div
                className={`my-1 flex w-full flex-row rounded-md bg-rose-500 p-2 shadow-lg`}
              >
                <div className="ml-1">
                  <p className="font-bold text-white">{message}</p>
                </div>
              </div>
            )}
            <div className="h-[30vh]">
              {process.map((item, index) => (
                <Grid key={index} md={2} className="gap-2">
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
      <Final open={final} setOpen={toggleFinal} />
      <Failed open={error} setOpen={toggleError} />
      <Success open={success} setOpen={toggleSuccess} />
    </div>
  );
};

export default BasicPage;
