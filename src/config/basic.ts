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
  {
    id: 2,
    problemImage: './problems/BasicIntegrals/2/ECUACION.PNG',
    problemTitle: 'Problema 2',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/2/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/2/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/2/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/2/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/2/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/2/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },      
    ],
  },
  {
    id: 3,
    problemImage: './problems/BasicIntegrals/3/ECUACION.PNG',
    problemTitle: 'Problema 3',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/3/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/3/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/3/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/3/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
    ],
  },
  {
    id: 4,
    problemImage: './problems/BasicIntegrals/4/ECUACION.PNG',
    problemTitle: 'Problema 4',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/4/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/4/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/4/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/4/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
    ],
  },
  {
    id: 5,
    problemImage: './problems/BasicIntegrals/5/ECUACION.PNG',
    problemTitle: 'Problema 5',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/5/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/5/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/5/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/5/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
    ],
  },
  {
    id: 6,
    problemImage: './problems/BasicIntegrals/6/ECUACION.PNG',
    problemTitle: 'Problema 6',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
      {
        level: 4,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/4/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/4/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/4/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 4',
      },
      {
        level: 5,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/5/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/5/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/5/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 5',
      },
      {
        level: 6,
        options: [
          {
            image: './problems/BasicIntegrals/6/step/6/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/6/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/6/step/6/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 6',
      },
    ],
  },
  {
    id: 7,
    problemImage: './problems/BasicIntegrals/7/ECUACION.PNG',
    problemTitle: 'Problema 7',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/7/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/7/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/7/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/7/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
    ],
  },
  {
    id: 8,
    problemImage: './problems/BasicIntegrals/8/ECUACION.PNG',
    problemTitle: 'Problema 8',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/8/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/8/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/8/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
      {
        level: 4,
        options: [
          {
            image: './problems/BasicIntegrals/8/step/4/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/4/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/8/step/4/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 4',
      },
    ],
  },
  {
    id: 9,
    problemImage: './problems/BasicIntegrals/9/ECUACION.PNG',
    problemTitle: 'Problema 9',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/9/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/9/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/9/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/9/step/4/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/4/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/9/step/4/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 4',
      },
    ],
  },
  {
    id: 10,
    problemImage: './problems/BasicIntegrals/10/ECUACION.PNG',
    problemTitle: 'Problema 10',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/BasicIntegrals/10/step/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 1',
      },
      {
        level: 2,
        options: [
          {
            image: './problems/BasicIntegrals/10/step/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 2',
      },
      {
        level: 3,
        options: [
          {
            image: './problems/BasicIntegrals/10/step/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 3',
      },
      {
        level: 4,
        options: [
          {
            image: './problems/BasicIntegrals/10/step/4/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/4/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/BasicIntegrals/10/step/4/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Consejo para el nivel 4',
      },
    ],
  }, 
];
