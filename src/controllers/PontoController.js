const mongoose = require('mongoose');
const Ponto = mongoose.model('Ponto');

module.exports = {
    async index(req, res){
        const {page = 1} = req.query;
        const pontos = await Ponto.paginate({},{page, limit: 10});

        return res.json(pontos);
    },

    async store(req, res) {
        const ponto = await Ponto.create(req.body);
        return res.json(ponto);
    },

    async show(req, res) {
        const ponto = await Ponto.findById(req.params.id);
        return res.json(ponto);
    },

    async update(req, res){
        const ponto = await Ponto.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(ponto);
    },

    async destroy(req, res){
        await Ponto.findByIdAndRemove(req.params.id);
        return res.send();
    }
};
