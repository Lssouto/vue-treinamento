const data = require('../model/data')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user){
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.data.authentication.jwtSecret,{
        expiresIn:ONE_WEEK
    })
}

const _verify = (value)=>{
    
    let user = (data.usuarios).find(function(pos){
        return pos.user == value.user
    })
    if(user == undefined || user == null) 
        return false;
    return {
        status: user.password === value.password,
        user: user
    }
    
}

module.exports = { 
    register  : (req,res) => {
        try {
            let verifyResult = _verify(req.body)
            
            if(verifyResult.status)
               res.send({
                   status: "fail",
                   msg: "Usuário já Cadastrado",
                   user: verifyResult.user.user,
               }) 
               
            else{
                data.usuarios.push(req.body)
                res.send({
                    status: "sucess",
                    msg: "Novo usuário Cadastrado",
                    user: verifyResult.user
                })
            }
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao registrar: " + e)
        }
    },
    login : (req,res) => {
        try {
            let verifyResult = _verify(req.body)
                
            if(verifyResult.status)
                res.send({
                    status: "sucess",
                    msg: "Login Realizado" ,  
                    user: verifyResult.user.user,
                    token: jwtSignUser(verifyResult.user)
                })
            else
                res.send({
                    status: "fail",
                    msg: "Login Incorreto" ,  
                    user: req.body
                })
        } catch (e) {
            res.status(500).send("Ocorreu um erro ao tentar logar: " + e)
        }
    }
}
