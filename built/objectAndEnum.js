"use strict";
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Ator"] = 1] = "Ator";
    Profissao[Profissao["Atriz"] = 2] = "Atriz";
})(Profissao || (Profissao = {}));
const Claudio = {
    nome: "Claudio",
    idade: 35,
    profissao: Profissao.Desenvolvedor
};
const Andre = {
    nome: 'Andre',
    idade: 25,
    profissao: Profissao.Ator
};
const Pedro = {
    nome: 'Pedro',
    idade: 10,
    materias: ['Português', 'Matemática']
};
