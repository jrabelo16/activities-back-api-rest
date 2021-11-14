const express = require("express");
const app = express();
app.use(express.json());

const convidados = ["Carlos", "Amanda", "Fernanda", "Juliana", "Lucas", "Roberto"];

//Letra A

app.get("/convidados/consultar", (req, res) => {
    console.log("Consultando convidado");
    res.json(convidados);
});


//Letra B

app.get("/convidados/buscar", (req, res) => {
    console.log("Buscando convidado");

    const resposta = {
        mensagem: convidados.includes(req.query.nome) ? `A convidada buscada está presente na lista.` : `A convidada buscada não está presente na lista.`
    };

    if (req.query.nome) {
        res.json(resposta);
    } else {
        res.json(convidados);
    }
});


//Letra C

app.post("/convidados/adicionar", (req, res) => {
    console.log("Adicionando convidado");
    console.log(req.body.nome);

    const novoConvidado = req.body.nome;

    const resposta = {
        mensagem: convidados.some(x => x === novoConvidado) ? `O nome da convidada a ser adicionado já existe na lista. Caso queira informar outra convidada de memso nome, favor fornecer o sobrenome também.` : `Convidada adicionada.`

    };

    if (!convidados.some(x => x === novoConvidado)) {
        convidados.push(novoConvidado);
    }
    res.json(resposta);
    console.log(convidados);

});


// Letra D

app.delete("/convidados/remover", (req, res) => {
    console.log("Removendo convidado");
    console.log(req.query.nome);
    const resposta = {
        mensagem: convidados.includes(req.query.nome) ? `Convidada removida.` : `O nome da convidada a ser removido não existe na lista. Nenhuma convidada foi removida.`
    };

    res.json(resposta);

    if (convidados.includes(req.query.nome)) {
        const index = convidados.indexOf(req.query.nome);
        convidados.splice(index, 1);
    };

});

app.listen(8000);