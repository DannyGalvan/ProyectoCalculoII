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
        advice: 'Recuerda que en integrales se suma +1 al exponente',
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
        advice: 'Luego de sumar 1 al exponente se divide por el mismo valor del exponente resultante.',
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
        advice: 'No olvides agregar + C a tu integral.',
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
        advice: 'Recuerde que la integral de e^x es igual que su derivada',
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
        advice: 'No se olvide de agregar el + C en su respuesta de integral.',
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
        advice: 'Si escribimos un 2 en el integrando, tendremos la derivada del seno del ángulo doble',
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
        advice: 'Ten cuidado al integrar',
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
        advice: 'No olvides colocar el + C a tu integral.',
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
        advice: 'Las constantes puedes sacarlas de tu integral',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'No olvides colocar el + C a tu integral. ',
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
        advice: 'Cuando la ecuación se está sumando o restando puedes dividirla en varias partes las cuales integraras después',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'No olvides colocar el + C a tu integral.',
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
        advice: 'Reescribe la integral sacando la constante y convirtiendo de raíz a exponente',
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
        advice: 'Recuerda que en multiplicación se suman exponentes',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'Si tienes en el denominador una fracción puedes subir a multiplicar el denominador de esa fracción y dejar el numerador en la parte de abajo',
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
        advice: 'Recuerda que la multiplicación de fracciones es lineal',
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
        advice: 'Recuerda simplificar términos y no olvidar agregar el + C.',
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
        advice: 'Si aplicas una sustitución al denominador te darás cuenta que se vuelve negativa la derivada.',
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
        advice: 'Como es una función racional simple, su integral será un logaritmo',
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
        advice: 'No olvides colocar el + C a tu integral.',
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
        advice: 'Las raíces cuadradas también se pueden expresar como una potencia de ½',
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
        advice: 'Cuando la ecuación se está sumando o restando puedes dividirla en varias partes las cuales integraras después',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'Si tienes en el denominador una fracción puedes subir a multiplicar el denominador de esa fracción y dejar el numerador en la parte de abajo.',
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
        advice: 'Recuerda que puedes subir los denominadores cambiándole su exponente a negativo, una raíz cuadrada también se expresa como 1/2',
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
        advice: 'En las multiplicaciones recuerda que se suman los exponentes.',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'Si tienes en el denominador una fracción puedes subir a multiplicar el denominador de esa fracción y dejar el numerador en la parte de abajo.',
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
        advice: 'Cuando una función se esta sumando o restando puedes dividir cada una en una integral individual.',
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
        advice: 'Recuerda que puedes sacar afuera de la integral las constantes',
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
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor',
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
        advice: 'Si tienes en el denominador una fracción puedes subir a multiplicar el denominador de esa fracción y dejar el numerador en la parte de abajo.',
      },
    ],
  }, 
];
