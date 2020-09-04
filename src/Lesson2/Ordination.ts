/**
 * Ordenação
 *
 * Uma equipe implementou e disponibilizou como biblioteca estática uma função
 * que ordena em ordem crescente um vetor de inteiros. Porém, esta função deve
 * respeitar certas características:
 *  a. O vetor deve possuir entre 4 e 10 entradas (inclusive)
 *  b. Cada número deve possuir 5 dígitos
 *  c. A função retorna 0 caso a entrada não respeite as condições de entrada
 *    e 1 caso contrário
 *  d. Só são aceitos números inteiros.
 *
 * Com isto, seu objetivo será de criar casos de testes de acordo com critérios
 * estabelecidos.
 */

import randomIntFromInterval from '../utils/randomIntFromInterval';

class Ordination {
  generateRandomArray() {
    const length = randomIntFromInterval(4, 10);

    const array = Array.from(Array(length)).map(x => randomIntFromInterval(10000, 99999))
    console.log(array);

    return array;
  }
}

export default Ordination;
