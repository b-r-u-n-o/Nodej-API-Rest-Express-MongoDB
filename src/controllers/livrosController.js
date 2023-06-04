import livros from "../models/Livro.js";




class livroController {

    static listarLivros = async (req, res) => {
        try {
            const listaDeLivros = await livros.find({})
                .populate(['autor', 'editora']);
                // .populate([
                //     {model: 'Autor', select: 'nome'},
                //     {model: 'Editora', select: 'editora'}
                // ]);
            res.status(200).json(listaDeLivros)
        } catch (err) {
            console.error(err);
            res.status(500).send("Erro ao listar livros");
        }
    }

    static listarLivrosPorId = async (req, res) => {
        const id = req.params.id;

        livros.findById(id)
            .populate('autor', 'nome')
            .then(livros => {
                res.status(200).send({message: livros})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - Livro não encontrado.`})
            })
    }

    static cadastrarLivros = async (req, res) => {

        try {
            let livro = new livros(req.body);
            await livro.save();
            res.status(201).send(livro.toJSON())
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - falha ao cadastrar livro.`})
        }
    }

    static atualizarLivros = async (req, res) => {
        const id = req.params.id

        try {
            await livros.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Livro atualizado com sucesso."})
        } catch (err) {
            // console.error(err)
            res.status(400).send({message: `${err.message} - falha ao atualizar livro.`})
        }
        
        //  Outra maneira de resolver a questão de func async com promises

        // livros.findByIdAndUpdate(id, {$set: req.body})
        //     .then(res => {
        //         res.status(200).send({message: "Livro atualizado com sucesso."})                
        //     })
        //     .catch(err =>  {
        //         res.status(500).send({message: `${err.message} - falha ao atualizar livro.`})
        //     })      
            
    }

    static deletarLivros = async (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id)
            .then(() => {
                res.status(200).send({message: 'Autor removido com sucesso.'})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - falha ao deletar livro`})
            })
    }
    // método para realizar uma busca por meio de query na url
    static listarLivrosPorEditora = async (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {})
            .then(livros => {
                res.status(200).send(livros)
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - falha ao encontrar editora`})
            })
    }
}


export default livroController