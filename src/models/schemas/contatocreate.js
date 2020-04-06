const mongoose = require("../../../config/mongo");
let Schema = mongoose.Schema;

let Productchema = new Schema({

    nome: {
        type: String,
        require:true,
        uppercase:true
    },
    canal: {
        type: String,
        require:true
    },
    valor: {
        type: String,
        require:true
    },
    obs: {
        type: String
    }
});


const Product = mongoose.model('contato', Productchema);
module.exports = Product;