import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

// Eventos da conexão
db.on('error', console.log.bind(console, 'Erro de conexão'));
db.once('open', () => {
    console.log('Conexão realizada com sucesso')
})

// Instância o express
const app = express();
// Ajusta para usar o json do express
app.use(express.json());
// Instância as rotas
routes(app);

// Envia os componentes para o servidor
export default app