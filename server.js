import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'

import auth from './middleware/auth.js'

const app = express()

app.use(express.json())

//mongodb+srv://mongodb:<db_password>@bancodedados.0qlzesa.mongodb.net/?retryWrites=true&w=majority&appName=BancoDeDados


// pública ->cadastrar e login, privado ->listar

app.use('/',publicRoutes)
app.use("/",auth, privateRoutes)

app.listen(3000, () => console.log("server running"))
