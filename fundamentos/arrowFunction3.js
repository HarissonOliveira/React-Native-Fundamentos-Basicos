let comparaComThis = function (param) {
    console.log(this === param);
} // Cria o THIS sempre apontando para o ambiente GLOBAL

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

let comparaComThisArrow = param => console.log(this === param); // Cria a Arrow Function com o This apontando para o modulo que foi definido, no caso esse arquivo
comparaComThisArrow(global);
comparaComThisArrow(module.exports);


comparaComThisArrow = comparaComThisArrow.bind(obj); // Não muda o this da Arrow Function
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);