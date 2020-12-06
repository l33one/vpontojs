const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const PontoSchema = new mongoose.Schema({
    colaborador: {
        type: Object,
        required: true,
    },
    localizacao: {
        type: String,
    },
    hora_registro: {
        type: Date,
        default: Date.now,
    },

});
PontoSchema.plugin(mongoosePaginate);
mongoose.model('Ponto', PontoSchema);