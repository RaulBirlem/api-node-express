import express from 'express'
import publicRoutes from './routes/public.js'
const app = express()

app.use(express.json())

//mongodb+srv://mongodb:<db_password>@bancodedados.0qlzesa.mongodb.net/?retryWrites=true&w=majority&appName=BancoDeDados


// pública ->cadastrar e login, privado ->listar

app.use('/',publicRoutes)

app.listen(3000, () => console.log("server running"))
