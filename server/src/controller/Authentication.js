const login = require('../model/data')
const jwt = require('jsonwebtoken')
const config = require('../config')

function jwtSignUser (user){
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.data.authentication.jwtSecret,{
        expiresIn:ONE_WEEK
    })
}

const _verify = (value)=>{
    
    let user = (login.usuarios).find(function(pos){
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
        let verifyResult = _verify(req.body)
        
        if(verifyResult.status)
           res.send({
               status: "fail",
               msg: "Usuário já Cadastrado",
               user: verifyResult.user.user,
           }) 
           
        else{
            login.usuarios.push(req.body)
            res.send({
                status: "sucess",
                msg: "Novo usuário Cadastrado",
                user: verifyResult.user
            })
        }
    },
    login : (req,res) => {
        
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
    }
}
