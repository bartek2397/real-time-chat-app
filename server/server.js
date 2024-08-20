import express, { json } from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 3500;

app.use(cors());

app.use(json())

app.use(express.json());
app.use('/api/auth', authRoutes);

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/', (req, res) => {
    res.json({message: 'Welcome to the chat!'})
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))