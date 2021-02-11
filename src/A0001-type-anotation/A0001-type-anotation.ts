// Tipos básicos
let nome: string = 'Luiz';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeStrings: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: {nome: string, idade: number, adulto?: boolean} = {
    nome: 'Luiz',
    idade: 123
}

console.log(pessoa.nome);

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

console.log(soma(4, 2));
console.log(soma2(4, 2));
