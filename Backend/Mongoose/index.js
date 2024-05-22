const mongoose = require ('mongoose');

(async()=> {
    try {
        await mongoose.connect("mongodb://localhost/test/testMongoose");
        console.log("connexion reussi avec la base de données");
    }catch (error) {
        console.log(error.message);
    }
})();