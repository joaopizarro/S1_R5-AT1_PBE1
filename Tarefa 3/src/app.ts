// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Rota de operação com parâmetros mistos
app.get("/operacao/:tipo", (req, res) => {

    const tipo = req.params.tipo;
    const numUm = Number(req.query.numUm);
    const numDois = Number(req.query.numDois);

    switch (tipo) {

        case "soma":
            return res.send(`Resultado da soma: ${numUm + numDois}`);

        case "subtracao":
            return res.send(`Resultado da subtração: ${numUm - numDois}`);

        case "multiplicacao":
            return res.send(`Resultado da multiplicação: ${numUm * numDois}`);

        case "divisao":
            if (numDois === 0) {
                return res.send("Erro: Não é possível dividir por zero.");
            }

            return res.send(`Resultado da divisão: ${numUm / numDois}`);

        default:
            return res.send("Erro: Operação inválida.");
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});

