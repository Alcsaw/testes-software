/**
 * Qual é o tipo do triângulo
 *
 * Uma terceira função que deve ser testada lê três lados de um triângulo e
 * imprime que tipo de triângulo é este. Alguns pontos frisados sobre esta
 * questão:
 * I.A saída da função é um inteiro representando os seguintes valores:
 *  (a) 1 - Equilátero
 *  (b) 2 - Isósceles
 *  (c) 3 - Escaleno
 *  (d) 4 - Não é triângulo
 *  (e) 0 - Entrada inválida
 * II. Os parâmetros devem estar na faixa 0::99 (ou será entrada inválida)
 * III. Mesmo que triângulo equilátero seja isósceles a função deverá retornar 2
 *
 * Você deverá criar e executar casos de testes.
 */

class Triangle {
  getType(aSide: number, bSide: number, cSide: number) {

    if (aSide <= 0 || aSide > 99 ||
      bSide <= 0 || bSide > 99 ||
      cSide <= 0 || cSide > 99) {
      return 0;
    }

    if (this.triangleCanExists(aSide, bSide, cSide)) {
      if (aSide === bSide && aSide === cSide) {
        return 1;
      }

      if ((aSide === bSide && aSide !== cSide)
        || (aSide === cSide && aSide !== bSide)
        || (bSide === cSide && bSide !== aSide)) {
        return 2;
      }

      return 3;
    } else {
      return 4;
    }
  }

  triangleCanExists(aSide: number, bSide: number, cSide: number) {
    if ((Math.abs(bSide - cSide) < aSide && aSide < bSide + cSide)
      || (Math.abs(aSide - cSide) < bSide && bSide < aSide + cSide)
      || (Math.abs(aSide - bSide) < cSide && cSide < aSide + bSide)) {
      return true;
    } else {
      return false;
    }
  }

}

export default Triangle;
