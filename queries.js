const database = require("./database-connection");

module.exports = {
    list(){
        return database.select("*").from("resolution");
    },
    read(id){
        return database.select("*").from("resolution").where("id", id).first();
    },
    create(resolution){
        return database("resolution").insert(resolution, "*")
            .then(resolution => resolution[0]);
    },
    update(id, resolution){
        return database("resolution").where("id", id).update(resolution, "*")
            .then(resolution => resolution[0]);
    },
    delete(id){
        return database("resolution").where("id", id).del();
    }
};
