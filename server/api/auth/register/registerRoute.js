import express from 'express'
import { createClient } from '@supabase/supabase-js'

const router = express.Router()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

router.post('/', async (req, res) => {
    const { email, password, username } = req.body

    try {
        const {user, error} = await supabase.auth.signUp({
            email, 
            password
        })
        
        if (error) throw error

        const { data, error: profileError} = await supabase
        .from('users')
        .insert([{ id: user.id, username, email}])

        if (profileError) throw profileError

        res.status(201).json({message: "User registered successfully", user})
    } catch (error) {
        res.status(400).json({ error: error.meesage })
    }
})

module.exports = router