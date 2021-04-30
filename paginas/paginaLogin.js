const template = require('./template');


module.exports = (req, res) => {
    const html = template(
        'Entre aqui', `
        <form action="/login" method="post"> 
        <div>
                <label for="email">Email:</label>
                <input type="text" name="email" id="email">
        </div>    
        <div>
                <label for="senha">Senha</label>
            <input type="text" name="senha" id="senha">
        </div>
        <div>
            <button type="submit">Entrar</button>
        </div>
    </form>
    `);
    res.status(200).send(html)
}