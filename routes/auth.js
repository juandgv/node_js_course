import { Router } from "express";
import { USERS_BBDD } from '../bbdd.js'
const authRouter = Router();

// Endpoint public (No auth no autorizathion)
authRouter.get("publico", (req,res) => res.send("Public endpoint"))

//Authenticated endpoint
authRouter.post("Autenticado", (req,res) =>{
    const {email, password } = req.body

    if(!email || !password) return res.send(400)
    const users = USERS_BBDD.filter(user => user.email === email)

    if(!user) return res.send(401)

    if(user.password !== password) return res.send(401)

    res.send (`Usuario ${user.name} autenticado`);

} )
//Authorized endpoint (only administrators)

authRouter.post(" Autorizado ", (req, res => {
    const {email, password } = req.body

    if(!email || !password) return res.send(400)
    
    const user = auth

    if(user.role !== 'admin') return res.send(403)

    res.send (`Usuario administrador ${user.name} `);


}))


export default authRouter;

