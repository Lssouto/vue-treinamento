const data = require('../model/data')

module.exports = { 
    getAll  : (req,res) => {
        try {
            res.send(data.games)
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao receber os jogos: " + e)
        }
    },
    create : (req,res)=>{
        try {
            req.body['id'] = data.games[data.games.length-1]['id'] + 1;
            data.games.push(req.body)
            console.log("\n"+req.body+"\n")
            res.send("Jogo adicionado")
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao adicionar o jogo :" + e)
        }
    }
}
