/**
 * 
 * O kata
 * 
 * Passo 1: maneira simples
 * Crie uma calculadora simples de String com um método int add(String numbers).
 * O argumento string pode conter 0, 1 ou 2 números e retornará sua soma (para uma string vazia retornará 0)
 * por exemplo "" ou "1" ou "1,2".
 * Comece com o caso de teste simples de uma string vazia e passe para 1 e dois números.
 * Lembre-se de resolver as coisas da maneira mais simples possível, de modo a forçar-se a escrever
 * testes sobre os quais você não pensou.
 * Lembre-se de refatorar após cada teste de aprovação.
 * 
 * Etapa 2: lidar com uma quantidade grande de números
 * Permitir que o método add() manipule uma quantidade desconhecida de números.
 * 
 * Etapa 3: lidar com novas linhas entre os números
 * Permitir que o método add() manipule novas linhas entre números (em vez de vírgulas).
 * a seguinte entrada está ok: "1\n2,3" (será igual a 6)
 * a seguinte entrada NÃO é ok: "1,\n" (não é necessário comprovar - apenas esclarecer)
 * http:501
 * 
 * Etapa 4: suporte a diferentes delimitadores
 * Suportar diferentes delimitadores: para mudar o delimitador, o início da string conterá uma linha
 * separada que se parece com isto:
 * "//[delimiter]\n[numbers...]"
 * Por exemplo "//;\n1;2" deve retornar 3 onde o delimitador padrão é ';'.
 * A primeira linha é opcional. Todos os cenários existentes ainda devem ser suportados.
 * 
 */

class KataCalculator {
  add(numbers: string) {
    
    if (numbers.startsWith("//")) {
      var delimiter =  numbers[2];
      var integers = numbers.slice(4)
    } else {
      var delimiter =  ",";
      var integers = numbers;
    }
    
    const array = integers.split(delimiter).map(Number);
    const arrayIntegers = array.filter(item => Number.isInteger(item));

    const sum = arrayIntegers.reduce((a, b) => a + b, 0)

    return sum;
  }

}

export default KataCalculator;