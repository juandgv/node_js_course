
import { USERS_BBDD } from "../bbdd"

const authByEmailPwd = (email, password) => {
   
    const users = USERS_BBDD.filter(user => user.email === email)

    if(!user) throw new Error()

    if(user.password !== password) throw new Error()

    return user
}

export default auth-by-authByEmailPwd