const express = require('express');
const route = express.Router();
const { pool } = require('../config/db')
const bcrypt = require("bcrypt");


route.post('/login', (req, res, next) => {
    const { email, password } = req.body;
    pool.query("SELECT * FROM users WHERE email = $1",
        [email],
        (err, results) => {
            if (err) {
                throw err;
            }
            console.log(results.rows);

            if (results.rows.length > 0) {
                const user = results.rows[0];

                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) {
                        res.status(201).send({ message: err })
                    }
                    if (isMatch) {
                        res.status(200).send(user)
                    } else {
                        res.status(201).send({ message: "Password is incorrect" })
                    }
                });
            } else {
                res.status(201).send({ message: "No user with that email address" })
            }
        }
    );
})

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