import express from 'express';
import data from './data.js'
import Mongoose from 'mongoose';
import userRouter from './routers/userRouter.js'

const app = express();
Mongoose.connect('mongodb://localhost/amazona', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.get('/', (req, res)=>{
    res.send('working')
})
app.get('/api/products/', (req, res) => {
    res.send(data)
})

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x)=> x._id === req.params.id)
    res.send(product)
})
app.use('/api/users', userRouter);

const port = process.env.port || 5000
app.listen(5000, ()=>{
    console.log(`its workin on ${port}` )
})