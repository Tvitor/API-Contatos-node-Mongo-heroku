const moment = require("moment");
const contactData = require("./contatodata");
const now = new Date();


module.exports = {
    // criar contrato

    async contatocreate(req, res) {
        const {nome, canal, valor} = req.body;
        let newContact;

        newContact = {
            ...{"nome":nome},
            ...{"canal":canal},
            ...{"valor":valor}
        };
            
        try { 
            
          await contactData.newContact(newContact) 
            
            res.status(201).send("Contato criado com sucesso");
            
        }catch(error){
            return res.status(400).send({error:"contato não cadastrado"})
        }

    },

    //contact Update
    async contatoput(req, res) {
        let product = req.body;
        let data;
        
        if(!product)
        res.status(400).send("dados não informados");

        try{
            data = await contactData.contactUpdate(product)     
            res.status(201).send(data);

        }catch(error){
            res.status(404).send("não foi possível atualizar");
        }
    },
    
    async contatodelete(req, res) {
        const {idContato} = req.query;
        
        if(idContato){
            await contactData.contatoDelete(idContato, res);
           
        }else{
            res.status(401).send("id não recebido")
        }
    },

    async contatolist(req, res) {
        let {page, limit} = req.query;
        
        if(!page)
            page = 0;
            
        if(!limit)
            limit = 10;

        let data;
        data = await contactData.listContacts(page, limit);
        if(data)
        res.status(200).send(data);

        if(!data)
        res.status(404).send("contatos não encontrados");
    },

    async contatoget(req, res) {
        const {idContato} = req.query;
        let data;
        
        try{
            data = await contactData.findContact(idContato);
            res.status(200).send(data);

        }catch(error){
            res.status(404).send("contato não encontrado");
        }
    }

}