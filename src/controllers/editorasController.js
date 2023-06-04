import editoras from "../models/Editora.js";


class editoraController {

    static listarEditoras = async (req, res) => {
        try {
            const listaDeEditoras = await editoras.find({});
            res.status(200).json(listaDeEditoras);
        } catch (err) {
            res.status(500).send("Erro ao listar editoras");
        }
    }

    static listarEditorasPorId = async (req, res) => {
        const id = req.params.id;

        editoras.findById(id)
            .then(editoras => {
                res.status(200).send({message: editoras})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - Livro não encontrado.`})
            })
    }

    static cadastrarEditoras = async (req, res) => {

        try {
            let editora= new editoras(req.body);
            await editora.save();
            res.status(201).send(editora.toJSON())
        } catch (err) {
            console.error(err)
            res.status(500).send({message: `${err.message} - falha ao cadastrar editora.`})
        }
    }

    static atualizarEditoras = async (req, res) => {
        const id = req.params.id

        try {
            await editoras.findByIdAndUpdate(id, {$set: req.body});
            res.status(200).send({message: "Editora atualizada com sucesso."})
        } catch (err) {
            // console.error(err)
            res.status(400).send({message: `${err.message} - falha ao atualizar a editora.`})
        }
    }

    static deletarEditoras = async (req, res) => {
        const id = req.params.id;

        editoras.findByIdAndDelete(id)
            .then(() => {
                res.status(200).send({message: 'Editora removida com sucesso.'})
            })
            .catch(err => {
                res.status(500).send({message: `${err.message} - falha ao deletar editora`})
            })
    }

}


export default editoraController