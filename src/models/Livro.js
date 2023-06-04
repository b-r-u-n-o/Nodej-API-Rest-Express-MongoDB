import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        // maneira de associar dados entre coleções 
        // no caso associar livros com autores
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
        editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
        numPaginas: {type: Number}
    }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;