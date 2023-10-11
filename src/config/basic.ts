export interface Option {
  image: string;
  correct: boolean;
}

export interface Step {
  level: number;
  options: Option[];
  advice: string;
}

export interface Problem {
  id: number;
  problemImage: string;
  problemTitle: string;
  steps: Step[];
}

export interface Process {
    problem: Option;
    response: Option;
}

export const basicProblems: Problem[] = [
  {
    id: 1,
    problemImage: './problems/BasicIntegrals/1/ECUACION.PNG',
    problemTitle: 'Problema 1',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/1/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/1/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/2/C2_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/1/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/1/step/3/C3_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
    ],
  },
];
