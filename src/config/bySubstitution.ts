import { Problem } from "./basic";


export const bySubstitutionProblems: Problem[] = [
  {
    id: 1,
    problemImage: './problems/IntegralsBySubstitution/1/ECUACION.PNG',
    problemTitle: 'Problema 1',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Las raíces cuadradas también se pueden expresar como una potencia de ½',
        instruction: "Seleccione una opción en donde reescriba correctamente la integral",
      },
      {
        level: 2,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Intenta convertir en u siempre la parte más complicada de la función',
        instruction: "Encuentra u y du"
      },
      {
        level: 3,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Reemplaza en tu función x por u, teniendo cuidado en dejarlo solo en un mismo termino.',
        instruction: "Reemplaza U correctamente"
      },
      {
        level: 4,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda utilizar propiedad distributiva y ley de exponentes.',
        instruction: "Seleccione una opción en donde reescriba correctamente la integral"
      },
      {
        level: 5,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor.',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 6,
        options: [
          {
            image: './problems/IntegralsBySubstitution/1/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/1/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'No se te olvide reemplazar el valor de u por tu valor inicial de x',
        instruction: "Seleccione una opción que donde integre correctamente"
      },
    ],
  },
  {
    id: 2,
    problemImage: './problems/IntegralsBySubstitution/2/ECUACION.PNG',
    problemTitle: 'Problema 2',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que puedes subir los denominadores cambiándole su exponente a negativo',
        instruction: "Seleccione una opción en donde reescriba correctamente la integral"
      },
      {
        level: 2,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Intenta convertir en u siempre la parte más complicada de la función',
        instruction: "Encuentra u y du"
      },
      {
        level: 3,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Reemplaza en tu función x por u, teniendo cuidado en dejarlo solo en un mismo termino.',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 4,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda la factorización del cuadrado de una suma es: a2+2ab+b2',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 5,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda utilizar propiedad distributiva y ley de exponentes.',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 6,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'Cuando una función se esta sumando o restando puedes dividir cada una en una integral individual. Recuerda que puedes sacar de la integral las constantes',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 7,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P7.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que en integrales se suma +1 al exponente y luego se divide en ese mismo valor.',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 8,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P8.PNG',
            correct: true,
          },
        ],
        advice: 'No se te olvide simplificar y convertir tus exponentes negativos a positivos bajándolos nuevamente.',
        instruction: "Seleccione una opción que se adecue con la simplificación correcta"
      },
      {
        level: 9,
        options: [
          {
            image: './problems/IntegralsBySubstitution/2/IN1_P9.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/IN2_P9.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/2/C1_P9.PNG',
            correct: true,
          },
        ],
        advice: 'No se te olvide reemplazar los valores de U por su valor en X y agregar el + C',
        instruction: "Seleccione una opción que donde integre correctamente"
      },
    ],
  },
  {
    id: 3,
    problemImage: './problems/IntegralsBySubstitution/3/ECUACION.PNG',
    problemTitle: 'Problema 3',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Intenta convertir en u siempre la parte más complicada de la función y no olvides despejar x.',
        instruction: "Encuentra u y du"
      },
      {
        level: 2,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Sustituye x por U',
        instruction: "Sustituye correctamente u en la integral"
      },
      {
        level: 3,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'utiliza propiedad distributiva y regla de exponentes para la multiplicación',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 4,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Cuando una función se está sumando o restando puedes dividir cada una en una integral individual. Integra sumando +1 en el exponente y dividiéndolo por este mismo exponente.',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 5,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Reemplaza tu U por su valor en X, u=x+1',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 6,
        options: [
          {
            image: './problems/IntegralsBySubstitution/3/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/3/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'No se te olvide agregar el  +c',
        instruction: "Seleccione una opción que donde integre correctamente"
      },
    ],
  },
  {
    id: 4,
    problemImage: './problems/IntegralsBySubstitution/4/ECUACION.PNG',
    problemTitle: 'Problema 4',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Intenta convertir en u siempre la parte más complicada de la función y despeja x a razón de que pueda ser reemplazado por u',
        instruction: "Encuentra u y du"
      },
      {
        level: 2,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda tu integral de una forma más fácil en la cual puedas sustituir tu U',
        instruction: "Seleccione una opción en donde reescriba correctamente la integral"
      },
      {
        level: 3,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Remplaza tus x por u, ten cuidado de dejar todo en  términos de u con sus signos correspondientes',
        instruction: "Reemplaza u en tu integral"
      },
      {
        level: 4,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que puedes pasar tu denominador a numerador cambiándole el signo y en tu integral no olvides sacar tus constantes.',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 5,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Utiliza propiedad distributiva para simplificar, recuerda que puedes dividir tu integral cuando es separada solo por sumas o restas',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 6,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'Integra sumando +1 a tus exponentes y dividiendo por los mismos',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 7,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P7.PNG',
            correct: true,
          },
        ],
        advice: 'Multiplica tu constante por el resultado de tu integración',
        instruction: "Seleccione una opción en donde simplifique correctamente"
      },
      {
        level: 8,
        options: [
          {
            image: './problems/IntegralsBySubstitution/4/IN1_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/IN2_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/4/C1_P8.PNG',
            correct: true,
          },
        ],
        advice: 'No olvides reemplazar tu u por su valor en x',
        instruction: "Seleccione una opción que donde integre correctamente"
      },
    ],
  },
  {
    id: 5,
    problemImage: './problems/IntegralsBySubstitution/5/ECUACION.PNG',
    problemTitle: 'Problema 5',
    steps: [
      {
        level: 1,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P1.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P1.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que las raíces cuadradas se pueden expresar como un exponente ½',
        instruction: "Seleccione una opción en donde reescriba correctamente la integral"
      },
      {
        level: 2,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P2.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P2.PNG',
            correct: true,
          },
        ],
        advice: 'Haz u la parte más complicada que en este caso seria lo que esta adentro de la primera raíz y derivalo.',
        instruction: "Encuentre u y du"
      },
      {
        level: 3,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P3.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P3.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que en los despejes siempre es lo opuesto un lado del otro, es raíz lo opuesto es una potencia',
        instruction: "Despeja x y dx"
      },
      {
        level: 4,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P4.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P4.PNG',
            correct: true,
          },
        ],
        advice: 'Reemplaza por u todos tus valores de x, teniendo cuidado en todos los signos. No olvides la propiedad distributiva y ley de exponentes en multiplicación.',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 5,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P5.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P5.PNG',
            correct: true,
          },
        ],
        advice: 'Reemplaza por u todos tus valores de x, teniendo cuidado en todos los signos. No olvides la propiedad distributiva y ley de exponentes en multiplicación.',
        instruction: "Seleccione una opción en donde simplifique correctamente la integral"
      },
      {
        level: 6,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P6.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P6.PNG',
            correct: true,
          },
        ],
        advice: 'No olvides la propiedad distributiva y ley de exponentes en multiplicación.',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 7,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P7.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P7.PNG',
            correct: true,
          },
        ],
        advice: 'No olvides la propiedad distributiva y ley de exponentes en multiplicación.',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 8,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P8.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P8.PNG',
            correct: true,
          },
        ],
        advice: 'Recuerda que las constantes debes de sacarlas afuera de la integral',
        instruction: "Seleccione una opción que se adecue con la integración de la integral"
      },
      {
        level: 9,
        options: [
          {
            image: './problems/IntegralsBySubstitution/5/IN1_P9.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/IN2_P9.PNG',
            correct: false,
          },
          {
            image: './problems/IntegralsBySubstitution/5/C1_P9.PNG',
            correct: true,
          },
        ],
        advice: 'Integra sumando +1 a tus exponentes y dividiendo por los mismos',
        instruction: "Seleccione una opción que donde integre correctamente"
      },
    ],
  },
]