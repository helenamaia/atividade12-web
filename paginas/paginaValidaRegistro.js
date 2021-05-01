const template = require('./template');

let array = [];

module.exports = (req, res) => {
    const params = req.body;
    const {nome, email, senha} = params;
    let status;
    let html;
   
    if(nome != ''  && email != ''  && senha != '' ){
        const usuarios = require('./usuarios');
        usuarios.push(params);
       
        status = 200;
        html = template(
        'Cadastrado com sucesso', `
        <p>Você está cadastrado ${nome}</p>
        `);
        
        console.log(array);
    }else{

        status = 401;
        html = template('Nome ou Login ou senha inválidos',`<p>Retorne e tente novamente</p>`);
    }
    
    res.status(status).send(html);
}
