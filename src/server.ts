import express from 'express';

const app = express();

//Games controller

app.get('/games', (req, res) => {
    return res.status(200).json();
})

app.get('/games/:id/ads', (req, res) =>{
    return res.json([
        {id: 1, name: "ads 1"},
        {id: 2, name: "ads 2"},
        {id: 3, name: "ads 3"},
        {id: 4, name: "ads 4"},
    ]);
});

//Ads controller

app.get('/ads', (req, res) =>{
    return res.json();
})

app.post('/ads', (req, res) => {
    return res.status(201).json()
})

app.get('/ads/:id/discord', (req, res) => {
    const adsId = req.params.id;
    return res.json();
})

app.listen(3333);