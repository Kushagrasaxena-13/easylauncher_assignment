const express = require('express');
const { create_token, validate_token } = require('../middleware/jwt');
const route = express.Router();

route.post("/login", async (req, res) => {
    const { user_id, password } = req.body;

    if(user_id !== "kushagra007" || password !== "Password@123") {
        res.status(401).send({status: true, message: "Invalid Userid and password"});
    }

    const token = await create_token();
    res.status(200).send({ status: true, message: "Login Successfully", token});
})

route.get("/profile", validate_token, (req, res) => {
    res.send({message: "Profile Page."})
})

module.exports = route;