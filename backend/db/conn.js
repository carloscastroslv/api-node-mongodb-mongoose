const mongoose = require('mongoose')
require('dotenv').config();

async function main(){
    try {
        mongoose.set("strictQuery", true)
        const DB_NAME = process.env.DB_NAME
        const DB_USERNAME = process.env.DB_USERNAME
        const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
        await mongoose.connect(
            // colocar as credenciais do banco de dados no link abaixo.
            "mongodb+srv://{DB_USERNAME}:{DB_PASSWORD}@cluster0.d2xtptm.mongodb.net/{DB_NAME}?retryWrites=true&w=majority&appName=Cluster0"
            );

        console.log("Conectado ao banco");
    } catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main