const express = require('express');

const PORT = 3001
const app = express();
app.use(express.json());

app.get('/', (req,res) => {
    res.send(
        `<p>Calculator API</p>`
    );
});

app.get('/api/add', (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.send((a + b).toString());
});

app.post('/api/subtract', (req, res) => {
    const a = req.body.a;
    console.log(req.body);
    const b = req.body.b;
    res.send((a - b).toString());
})

app.listen(PORT, () => {
    console.log('server on!')
})

