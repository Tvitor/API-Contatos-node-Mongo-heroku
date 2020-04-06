const assert = require("assert");
const Contact = require("../schemas/contatocreate");
const mongoose = require ("mongoose");

module.exports = {
  async  newContact(newProduct){
        let result = [];
        result = await Contact.create(newProduct)
    
        return result;

    },

    async contactUpdate(contact){
        let key;
        let value;
        let keyColumn;
        let valueColumn;
        let item = {};
        console.log(contact)

            for(let i = 0; i < Object.keys(contact).length; i++){
                key = Object.values(Object.keys(contact));
                value = Object.values(Object.values(contact));
                keyColumn = key[i];
                valueColumn = value[i];
                item[keyColumn]= valueColumn;
            
                Contact.findOneAndUpdate({_id: contact._id }, { "$set": item}, {new: true}, function(err, end){
                
                });
            }

        return  "Alteração concluída";  
    },

    async contatoDelete(contactId, res) {

        Contact.deleteMany(function(err, result){
            if(err) {
                return  res.status(404).send("contato não encontrados");
            }else{
                return res.status(201).send({"itens_removidos":result.deletedCount});
            }
        }).where('_id').in(contactId);

    },
    
    async listContacts(page, limit) {
        page = parseInt(page);
        limit = parseInt(limit);
        
        return Contact.find({}).skip(page).limit(limit);
    },

    async findContact(idContact) {
        return Contact.findOne({_id:idContact});
    }
}

