import express from "express";
import editoraController from "../controllers/editorasController.js"

const router = express.Router();

router
    .get("/editoras", editoraController.listarEditoras)
    .get("/editoras/:id", editoraController.listarEditorasPorId)
    .post("/editoras", editoraController.cadastrarEditoras)
    .put("/editoras/:id", editoraController.atualizarEditoras)
    .delete("/editoras/:id", editoraController.deletarEditoras)

export default router