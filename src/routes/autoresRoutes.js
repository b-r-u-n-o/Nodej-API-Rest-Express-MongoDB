import express from "express";
import autorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get("/autores", autorController.listarAutores)
    .get("/autores/:id", autorController.listarAutoresPorId)
    .post("/autores", autorController.cadastrarAutores)
    .put("/autores/:id", autorController.atualizarAutores)
    .delete("/autores/:id", autorController.deletarAutores)

export default router