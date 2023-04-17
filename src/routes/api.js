import express from 'express'
import api from '../controllers/API-Ctrl'
const router = express.Router()

let innitApiRoute = (app)=>{
    router.get('/users',api.showAllUsers) //method get --> read data
    router.post('/create-new-users',api.createNewUsers) //method post -->create data
    router.put('/update-users',api.updateUsers) //method put --> update data
    router.delete('/delete-users/:id',api.deleteUsers) //method delete -->delete data

    app.use('/api', router)
}

export default innitApiRoute;