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

// Rota de saudação
app.get("/saudacao/:nome", (req, res) => {

    const nome = req.params.nome;
    const hora = Number(req.query.hora);

    if (hora >= 6 && hora < 12) {
        return res.send(`Bom dia, ${nome}!`);
    } else if (hora >= 12 && hora < 18) {
        return res.send(`Boa tarde, ${nome}!`);
    } else {
        return res.send(`Boa noite, ${nome}!`);
    }

});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});