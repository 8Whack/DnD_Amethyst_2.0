const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require('./sequelize');

app.use(express.json());
app.use(cors());

//endpoints
app.post('/register', async (req, res) =>{
    const {username, email, password} = req.body;
    const checkUser = await sequelize.query(`
    SELECT * FROM users WHERE username = '${username}'`)
})

//sequelize.authenticate()
app.listen(PORT, ()=> console.log( `server running on port ${PORT}`))