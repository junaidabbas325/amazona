import express from 'express';
import {data} from './data.js'

const app = express();

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
const port = process.env.port || 5000
app.listen(5000, ()=>{
    console.log(`its workin on ${port}` )
})