const login = require('../model/data')

const _verify = (value)=>{
    
    let user = (login.usuarios).find(function(pos){
        return pos.user == value.user
    })
    if(user == undefined || user == null) 
        return false;
    return user.password === value.password
    
}

module.exports = { 
    register  : (req,res) => {
        res.send(_verify(req.body))
    }
    
}
