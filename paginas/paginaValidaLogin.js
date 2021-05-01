const template = require('./template');

module.exports = (req, res) => {
    const params = req.body;
    const {email, senha} = params;
    let status;
    let html;

    if(email != ''  && senha != '' ){
        status = 200;
        const usuarios = require('./usuarios');
        console.log(usuarios);
        let contador = 0;
        for (const usuario of usuarios) {
            if(usuario.email === email && usuario.senha === senha){
                contador = 1;
            }
        }
        if(contador === 1){
            html = template(
                'Logado com sucesso', `
                <p>Seja bem vindo ${email}</p>
                `);
        }else{
            status = 401;
            html = template('Login ou senha não encontrado',`<p>Tente novamente</p>`);    
        }
        
    }else{

        status = 401;
        html = template('Login ou senha inválidos',`<p>Tente novamente</p>`);
    }
    
    res.status(status).send(html);
}
