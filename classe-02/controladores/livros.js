const livros = require("../dados/livros");


//a) Consulta da coleção

function consultaDaColecao(req, res) {
    res.json(livros);
};


//b) Consulta de um livro por ID

function consultaDeUmLivroPorId(req, res) {
    const resposta = {
        mensagem: ""
    };

    const id = Number(req.params.id);

    if (id > 0) {
        if (livros.some(x => id === x.id)) {
            res.json(livros[id - 1]);
        } else {
            resposta.mensagem = "Não existe livro para o ID informado.";
            res.json(resposta);
        }
    } else {
        resposta.mensagem = "O valor do parâmetro ID da URL não é um número válido"
        res.json(resposta);
    }
};


//c) Adicionar um livro

function adicionarUmLivro(req, res) {
    let novoId = livros.length + 1;

    const novoLivro = {
        id: novoId,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };

    if (req.query) {
        livros.push(novoLivro);
    }
    novoId++;

    res.json(novoLivro);
};


//d) Substituindo um livro

function substituindoUmLivro(req, res) {
    const id = Number(req.params.id);
    const index = livros.findIndex(x => x.id === id);
    const novoLivro = {
        id: id,
        titulo: req.body.titulo,
        autor: req.body.autor,
        ano: req.body.ano,
        numPaginas: req.body.numPaginas
    };
    const resposta = {
        mensagem: ""
    };

    if (livros.some(x => x.id === id)) {
        livros.splice(index, 1, novoLivro);
        resposta.mensagem = "Livro substituído.";
    } else {
        resposta.mensagem = "Não existe livro a ser substituído para o ID informado.";
    }

    res.json(resposta);
};

module.exports = { consultaDaColecao, consultaDeUmLivroPorId, adicionarUmLivro, substituindoUmLivro };