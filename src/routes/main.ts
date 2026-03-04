import { Router } from 'express';
import {createUser, createUsers, getAllUsers, getUserByEmail} from '../services/user'


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/ping',(req,res)=>{
res.json({pong: true})
})

mainRouter.get('/test', (req,res)=>{
res.json({testando: true});
})

mainRouter.get('/user', async (req,res)=>{
const user = await createUser({
    name:'Camily Ferreira',
    email:'camilyferreira@gmail.com',
    posts:{
        create:{
            title: 'Meu primeiro post - Camily Ferreira',
            body: 'This is the first post by Camily Ferreira'
        }
    }
}); if (user){
res.status(201).json({ user })
} else{
    res.status(400).json({ error: 'Email already exists or is invalid' })    
}

});

mainRouter .post('/users', async (req,res)=>{
    const users = await createUsers([]);
    res.status(201).json({ ok: true })
});

mainRouter.get('/users', async (req,res)=>{
    const users = await getAllUsers();
    if (users) {
        res.json({ users });
    } else {
        res.status(500).json({ error: 'Error fetching users' });
    }
});

mainRouter.get('/user', async (req,res)=>{
    const user = await getUserByEmail('pedro@example.com');
    if (user) {
        res.json({ user });
    } else {
        res.status(404).json({ error: 'User not found' });
    }
})