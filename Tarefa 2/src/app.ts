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

app.get("/calculadora", (req, res) => {
    const operacao = req.query.operacao;
    const numUm = Number(req.query.numUm);
    const numDois = Number(req.query.numDois);

    switch (operacao) {
        case "soma":
            return res.send(`Resultado: ${numUm + numDois}`);

        case "subtracao":
            return res.send(`Resultado: ${numUm - numDois}`);

        case "multiplicacao":
            return res.send(`Resultado: ${numUm * numDois}`);

        case "divisao":
            if (numDois === 0) {
                return res.send("Erro: Não é possível dividir por zero.");
            }
            return res.send(`Resultado: ${numUm / numDois}`);

        default:
            return res.send("Erro: Operação inválida.");
    }
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});
