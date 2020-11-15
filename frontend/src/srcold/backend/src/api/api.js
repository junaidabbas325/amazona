
const getMethod = (req, res, data) => {
    console.log(data)
    return(
        res.json(data)
    )
}
const RecData = (req, res, data, len) => {
    const values = {
        "id": len ,
        "name": req.body.name
    }
    data.push(values)

    return(
        res.json(data)
        
    )
}
module.exports = {getMethod, RecData}