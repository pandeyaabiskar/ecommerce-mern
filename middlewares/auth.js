const {users} = require('../data')

const authorize = (req, res, next) => {
    let user = users.find((user) => user.username === req.body.name && 
    user.password === req.body.password)
    if(user){
        next()
    }else{
        res.status(401).send("Unauthorized access")
    }
}

const validate = (req, res, next) => {
    if(req.body.name === '' || req.body.password === ''){
        res.status(401).send('Please enter a value')
    }else {
        next()
    }
}

module.exports = {authorize, validate}