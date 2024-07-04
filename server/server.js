import express, { json } from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import postgres from 'postgres';
import sql from './db';


const app = express();
const PORT = 3500;

app.use(cors());

app.use(json())

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const authenticate = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
        
    }
    try {
        const { data: user, error } = await supabase.auth.getUser(token);
        if (error) {
            throw error;
          }
          req.user = user;
          next();
    } catch (error) {
        res.status(401).json({ error: 'Not authenticated' });
    }
}

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the chat!'})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))