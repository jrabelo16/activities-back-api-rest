const express = require("express");
const roteador = express();
const controladores = require("./controladores/livros");

roteador.get("/livros", controladores.consultaDaColecao);
roteador.get("/livros/:id", controladores.consultaDeUmLivroPorId);
roteador.post("/livros", controladores.adicionarUmLivro);
roteador.put("/livros/:id", controladores.substituindoUmLivro);

module.exports = roteador;