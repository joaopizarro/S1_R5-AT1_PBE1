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

// Rota para verificar se um ano é bissexto
app.get("/ano/:ano", (req, res) => {

    const ano = Number(req.params.ano);

    if (ano % 400 === 0 || (ano % 4 === 0 && ano % 100 !== 0)) {
        return res.send(`${ano} é um ano bissexto.`);
    } else {
        return res.send(`${ano} não é um ano bissexto.`);
    }

});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});