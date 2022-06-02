const express = require('express');
const route = express.Router();
const { pool } = require('../config/db')



route.post('/register',async (req, res, next) =>  {

    const { name, email, password, role } = req.body;
    hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    pool.query(
        `INSERT INTO users (name, email, password , role)
            VALUES ($1, $2, $3 , $4)
            RETURNING id, password`,
        [name, email, hashedPassword, role],
        (err, results) => {
            if (err) {
                res.status(500).send({ message: "something went wrong .trey again later" })
            }
            res.status(200).send({ message: "User added Successfully" })
        }
    );

})



module.exports = route;