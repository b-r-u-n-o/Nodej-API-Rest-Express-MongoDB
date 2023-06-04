import autores from "../models/Autor.js";


class autorController {

    static listarAutores = async (req, res) => {
        try {
            const listaDeAutores = await autores.find({});
            res.status(200).json(listaDeAutores);
        } catch (err) {
            res.status(500).send("Erro ao listar autores");
        }
    }

    static listarAutoresPorId = async (req, res) => {
        const id = req.params.id;

        autores.findById(id)
            .then(autores => {
                res.status(200).send({message: autores})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - Autor não encontrado.`})
            })
    }

    static cadastrarAutores = async (req, res) => {

        try {
            let autor = new autores(req.body);
            await autor.save();
            res.status(201).send(autor.toJSON())
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - falha ao cadastrar autor.`})
        }
    }

    static atualizarAutores = async (req, res) => {
        const id = req.params.id

        try {
            await autores.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Autor atualizado com sucesso."})
        } catch (err) {
            // console.error(err)
            res.status(400).send({message: `${err.message} - falha ao atualizar autor.`})
        }
    }

    static deletarAutores = async (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id)
            .then(() => {
                res.status(200).send({message: 'Autor removido com sucesso.'})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - falha ao deletar autor`})
            })
    }

}


export default autorController