import express from "express";
import livroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", livroController.listarLivros)
    .get("/livros/busca", livroController.listarLivrosPorEditora)
    .get("/livros/:id", livroController.listarLivrosPorId)
    .post("/livros", livroController.cadastrarLivros)
    .put("/livros/:id", livroController.atualizarLivros)
    .delete("/livros/:id", livroController.deletarLivros)

export default router