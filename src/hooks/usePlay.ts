import { useState } from "react";
import { Option, Problem, Process } from "../config/basic";
import { useLocalStorage } from "./useLocalStorage";

interface PropsPlay {
    problems : Problem[],
    id : string | undefined,
    key : string,
    toggleFinal : () => void,
    toggleSuccess : () => void,
    toggleError : () => void,
}

const usePlay = ({id, problems, toggleError, toggleFinal, toggleSuccess, key}: PropsPlay) => {

    const {get, set} = useLocalStorage(key);

    const problem = problems.find((item) => item.id === parseInt(id ?? '0'));

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
        if (current === problem?.steps.length) {
            toggleFinal();
            set(problem?.id ?? 0);
        }
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

    return {
        problem,
        message,
        currentStep,
        selectedItem,
        process,
        handleClick,
        storageValue: get(),
    }
}

export default usePlay
