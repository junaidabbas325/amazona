import express from 'express';
import Mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();
app.use(express.json()),
app.use(express.urlencoded({extended: true}))

Mongoose.connect(process.env.MONGOOSEDB_URL || 'mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/', (req, res)=>{
    res.send('working')
})



app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
    res.status(500).send({message: err.message})
})
const port = process.env.port || 5000
app.listen(5000, ()=>{
    console.log(`its workin on ${port}` )
})