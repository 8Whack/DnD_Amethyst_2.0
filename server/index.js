const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize');
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(cors());

//endpoints
app.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;
    const checkUsername = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'`)
    console.log(checkUsername[1].rowCount)
    if(checkUsername[1].rowCount !== 0){
        res.status(500).send('Username already taken')
    } else {
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);
        await sequelize.query(`
        INSERT INTO users(username, password, email)
        VALUES(
            '${username}',
            '${passwordHash}',
            '${email}'
        )`)
        const userInfo = await sequelize.query(`
        SELECT id, username FROM users WHERE username = '${username}'`)
        res.status(200).send(userInfo)
    }
})

app.post('/login', async (req, res) =>{
    const {username, password} = req.body;
    const validUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'
    `)
    if(validUser[1].rowCount === 1){
        if(bcrypt.compareSync(password, validUser[0][0].password)){
            let object = {
                id: validUser[0][0].id,
                username
            }
            res.status(200).send(object)
        } else {
            res.status(401).send('Password is incorrect')
        }
    } else {
        res.status(401).send('Username is incorrect')
    }
})

app.post('/combats', async (req,res)=>{
    const {userid, name, combats} = req.body;
    await sequelize.query(`INSERT INTO combats (userid, name, monsters) values (${userid}, '${name}', '${combats}'); `)
    
    const combatsInfo = await sequelize.query(`SELECT * FROM combats WHERE userid = ${userid}`)
    res.status(200).send(combatsInfo[0])
})

app.post('/allSavedCombats', async(req,res)=>{
    const {userid} = req.body;
    const combatsInfo = await sequelize.query(`SELECT * FROM combats WHERE userid = ${userid}`)
    res.status(200).send(combatsInfo[0])
})

app.delete('/allSavedCombats/:id/:userId', async(req, res)=>{
    const {id, userId} = req.params;
    await sequelize.query(`DELETE FROM combats WHERE id = ${id}`)

    const combatsInfo = await sequelize.query(`SELECT * FROM combats WHERE userid = ${userId}`)
    res.status(200).send(combatsInfo[0])
})


//sequelize.authenticate()
app.listen(PORT, ()=> console.log( `server running on port ${PORT}`))