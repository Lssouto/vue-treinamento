const data = require('../model/data')

module.exports = { 
    getGame  : (req,res) => {
        try {
            
            let games = null;
            const searchKey = req.query.searchKey
            
            if(searchKey){
                games = (data.games).filter(function(value){
                    return ((value.title).indexOf(searchKey) !== -1 || value.id == searchKey || value.ano == searchKey ) 
                })
            }
            else{
                games = data.games
            }
            
            res.send(games);
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
    },
    show : (req,res)=>{
        try {
            res.send((data.games).find((game)=>{
                return game.id == req.params.id
            }))
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao retornar o jogo :" + e)
        }
    },
    update : (req,res) =>{
        try {
            let position = (data.games).findIndex((game)=>{
                return game.id == req.params.id
            })
            data.games.splice(position,1,req.body)
            res.send("Atualizado")
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao atualizar o jogo :" + e)
        }
    }
}
