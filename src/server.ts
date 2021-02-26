import express, { request } from "express";

const app = express();

/**
 * GET => Busca
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteracao especifica
 */
    //http://localhost:3333/users
 app.get("/users", (request, response) =>{

    //return response.send("Hello World NLW04")
    return response.json({message: "Hello World NLW04"});
 });

 //1 parametro => Rota (Recurso API)~
 //2 parametro => request, response
 app.post("/users",(request, response) => {
    //Recebeu dados para salvar
    return response.json({message: "Os dados foram salvos com sucesso!"});
 });

//Start servidor node para execucao da API
app.listen(3333, ( ) => console.log("Servidor is running"));