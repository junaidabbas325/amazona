import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js';
import bcrypt from 'bcryptjs'
import { generateToken } from '../utils.js';
const userRouter = express.Router()

userRouter.get(
    '/seed', expressAsyncHandler( async (req, res) => {
        await User.remove({});
        const createdUsers = await User.insertMany(data.users)
        res.send({createdUsers})
    })
)
userRouter.post('/signin',
expressAsyncHandler(async(req, res)=>{
    console.log(req)
    const user = await User.findOne({email: req.body.email});

    if(user){
        console.log(bcrypt.compareSync(req.body.password, user.password))
        if(bcrypt.compareSync(req.body.password, user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
        }
    }
    else{
        res.status(401).send({message: 'Invalid email or Password'})
    }
}))
export default userRouter;

