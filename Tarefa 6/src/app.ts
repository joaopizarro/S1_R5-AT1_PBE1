// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8082;

// Rota para calcular o IMC
app.get("/imc", (req, res) => {

    const peso = Number(req.query.peso);
    const altura = Number(req.query.altura);

    const imc = peso / (altura * altura);

    if (imc < 18.5) {
        return res.send(`Seu IMC é ${imc.toFixed(2)}. Classificação: Abaixo do peso.`);
    } else if (imc < 25) {
        return res.send(`Seu IMC é ${imc.toFixed(2)}. Classificação: Peso normal.`);
    } else if (imc < 30) {
        return res.send(`Seu IMC é ${imc.toFixed(2)}. Classificação: Sobrepeso.`);
    } else {
        return res.send(`Seu IMC é ${imc.toFixed(2)}. Classificação: Obesidade.`);
    }

});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
});