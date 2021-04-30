const template = require('./template');


module.exports = (req, res) => {
    const html = template(
        'Cadastre-se aqui', `
        <form action="/registro" method="post">
        <div>
        <label for="nome">Nome:</label>
        <input type="text" name="nome" id="nome">
        </div>  
        <div>
                <label for="email">Email:</label>
                <input type="text" name="email" id="email">
        </div>    
        <div>
                <label for="senha">Senha</label>
            <input type="text" name="senha" id="senha">
        </div>
        <div>
            <button type="submit">Cadastrar</button>
        </div>
    </form>
    `);
    res.status(200).send(html)
}