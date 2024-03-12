import express from 'express';
const router = express.Router();
import User from '../models/user';

router.post('/', async (req,res) => {
    try {
        const user = await User.create(req.body);
        res.json(user);
    }
    catch(exception: any) {
        console.log(exception);
        res.status(500).json({message: "Failed to create user"})
    }
});

router.get('/', async (req, res) => {
    try{
        const users = await User.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}});

        res.json(users);
    }
    catch(exception: any) {
        console.log(exception);
        res.status(500).json({message: "Failed to fetch users"})
    }
})


router.get('/:name', async (req, res) => {
    try {
        const user = await User.findAll({attributes: {exclude: ['createdAt', 'updatedAt']}, where: {name: req.params.name}});
        if(!user) {
            res.status(404).json({message: "User not found"})
        } else {
            res.json(user);
        }

    }
    catch(exception : any) {
        console.log(exception);
        res.status(500).json({message: "User not found"})
    }
})


export default router;
