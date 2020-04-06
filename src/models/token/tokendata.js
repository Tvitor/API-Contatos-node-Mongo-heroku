const Admin = require("../schemas/adminschema");

module.exports = {

    //Find Admin by id
    findAdminById(id){
        return Admin.findOne({_id:id});
    
    }
}