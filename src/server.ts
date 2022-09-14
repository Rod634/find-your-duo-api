import express from 'express';
import { PrismaClient } from '@prisma/client'

const app = express();

const prisma = new PrismaClient({});

//Games controller

app.get('/games', async (req, res) => {
    const games = await prisma.game.findMany({
        include: {
            _count:{
                select: {
                    ads: true
                }
            }
        }
    });
    return res.status(200).json(games);
});

app.get('/games/:id/ads', async (req, res) =>{
    const gameId = req.params.id;
    
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId
        },
        orderBy: {
            createdAt: 'desc'
        }
    })


    return res.json(ads.map(ad =>{
        return{
            ...ad,
            weekDays: ad.weekDays.split(',')
        }
    }));
});

//Ads controller

app.get('/ads', (req, res) =>{
    return res.json();
});

app.post('/ads', (req, res) => {
    return res.status(201).json()
});

app.get('/ads/:id/discord', async (req, res) => {
    const adsId = req.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true
        },
        where: {
            id: adsId
        }
    });

    return res.json(ad);
});

app.listen(3333);