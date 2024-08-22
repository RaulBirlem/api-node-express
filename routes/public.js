import express from "express"
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'



const prisma = new PrismaClient()
const router = express.Router()

// cadastro

router.post('/cadastro', async (req,res) => {

    try {
        
    const user = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    const userDB = await prisma.user.create({
        data:{
            email: user.email,
            name: user.name,
            password: hashPassword,
        }
    })

    res.status(201).json(userDB)

    } catch (error) {
        res.status(500).json({message:"Erro de servidor, tente novamente."})
    }
})

// LOGIN com token jtk

router.post('/login', async (req,res)=>{

    try {
        const userInfo = req.body
        const user = await prisma.user.findUnique({
            where:{email:userInfo.email
            },})

            if(!user){
                return res.status(404).json({message:"Usuário não encontrado."})
            }
            res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message:"Erro de servidor, tente novamente."})

    }
})



export default router