import  express  from "express";

import {addUser ,getUsers ,getUser} from '../controllers/user-controller.js';

const router = express.Router();


router.post('/add' , addUser);



router.get('/:id' , getUser);

export default router;
