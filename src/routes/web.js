import express from "express";
import homeController from '../controllers/homeController';
let router = express.Router();

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:id', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.editUser);
    router.post('/update-user', homeController.updateUser)
    router.get('/about', (req, res) => {
        res.send(`I'm tuan!`)
    })
    
    return app.use('/', router)
}


export default initWebRoute;

