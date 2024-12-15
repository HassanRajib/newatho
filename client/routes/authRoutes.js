import express from "express"
import { connectToDatabase } from "../lib/db.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";


const router = express.Router()

router.post('/signup',async (req,res) => {
    const {username, email, password} = req.body;
    try{
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM usert WHERE email = ?', [email])
        if (rows.length > 0){
            return res.status(409).json({message : "user already exisited"})
        }

        const hashPassword = await bcrypt.hash(password, 10)
        await db.query("INSERT INTO usert (username, email, password) VALUES (?, ?, ?)",[username, email, hashPassword])
        res.status(201).json({message: "user created successfully"})
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login',async (req,res) => {
    const {email, password} = req.body;
    try{
        const db = await connectToDatabase()
        const [rows] = await db.query('SELECT * FROM usert WHERE email = ?', [email])
        if (rows.length === 0){
            return res.status(404).json({message : "user dose not exisited"})
        }
        const isMatch = await bcrypt.compare(password, rows[0].password)
        if(!isMatch) {
            return res.status(401).json({message : "wrong password"})
        }
    
        const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'})

        return res.status(201).json({token: token})
    } catch (err) {
        return res.status(500).json(err.message)
    }
})


export default router;