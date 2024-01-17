enum Profissao {
    Desenvolvedor,
    Ator,
    Atriz,
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

const Claudio: Pessoa = {
    nome: "Claudio",
    idade: 35,
    profissao: Profissao.Desenvolvedor
}

const Andre: Pessoa = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Ator
}

interface Estudante extends Pessoa {
    materias: string[]
}

const Pedro: Estudante = {
    nome: 'Pedro',
    idade: 10,
    materias: ['Português', 'Matemática']
}