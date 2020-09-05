/**
 * Conversão
 *
 * Uma equipe disponibilizou como biblioteca uma função que converte valores
 * separados por vírgula (CSV) em um vetor. Esta função retorna uma cadeia de
 * inteiros contendo os números contidos no arquivo CSV. Caso esse arquivo não
 * possua números deverá ser retornado uma cadeia de inteiros vazia.
 *
 * Você deverá criar e executar casos de testes.
 */

class Conversion {
  getIntegersFromCSV(csv: string) {
    const array = csv.split(',').map(Number);
    const arrayIntegers = array.filter(item => Number.isInteger(item));

    return arrayIntegers;
  }

}

export default Conversion;
