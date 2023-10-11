import { Option } from "../config/basic";


export const shuffleArray = (array: Option[]) => {
    const shuffledArray = [...array]; // Crear una copia del array original
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray; // Devuelve la copia desordenada
};
