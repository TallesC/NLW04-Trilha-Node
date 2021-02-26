

// UUID => Universally Unique Identifier

interface DadosDeEnvioEmail{
    para: string;
    id: string;
    assunto: string;
    texto: string;
}

//function enviarEmail(para: string, id: string, assunto:string, texto:string){
    // Biblioteca de envio de envio de email
   // console.log(para, id, assunto, texto);
//}

//function enviarEmail(dados: DadosDeEnvioEmail){
    //console.log(dados.para; dados.id; dados.assunto, dados.texto);
//}

function enviarEmail({para, id, assunto, texto}: DadosDeEnvioEmail){
    console.log(para, id, assunto, texto);
}

class EnviarEmailParaUsuario{
    send(){
        //enviaremail("tallescezzar@gmail.com", "1212", "Inscricao", "Email de confirmação");
        enviarEmail({
            para: "dani@gmail.com",
            id: "1212",
            assunto: "Inscricao",
            texto: "Email de confirmação"
        })
    }
}