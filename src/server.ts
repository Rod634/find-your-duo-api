import express from 'express';

const app = express();

app.get('/ads', (req, res) =>{
    return res.json([
        {id: 1, name: "ads 1"},
        {id: 2, name: "ads 2"},
        {id: 3, name: "ads 3"},
        {id: 4, name: "ads 4"},
    ]);
});

app.listen(3333);