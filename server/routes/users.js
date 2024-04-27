const express = require('express');
const { create_token, validate_token } = require('../middleware/jwt');
const User = require('../model/user');
const bcrypt = require('bcrypt');
const route = express.Router();

route.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email: email }});
        if(!user) {
            return res.status(401).send({status: true, message: "No user found"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send({ status: false, message: "Invalid username or password" });
        }

        const token = await create_token();
        return res.status(200).send({ status: true, message: "Login Successfully", token});
    } catch (error) {
        return res.status(500).send({ status: false, message: "Internal Server Error"});
    }
})

route.post("/signup", async (req, res) => {
    try {
        const { first_name, last_name, email, password } = req.body;

        const existingUser = await User.findOne({ where: { email: email }});
        if (existingUser) {
            return res.status(409).send({ status: false, message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 15);

        await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: hashedPassword,
            username: email,
            role: "User"
        });

        return res.status(201).send({ status: true, message: "User created successfully" });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).send({ status: false, message: "Internal Server Error" });
    }
});

module.exports = route;