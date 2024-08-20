import express from 'express'
import { createClient } from '@supabase/supabase-js'

const router = express.Router()

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)

router.post('/', async (req, res) => {
    const {email, password} = req.body

    try {
        const {user, error} = await supabase.auth.signInWithPassword({
            email, 
            password,
        })

        if (error) throw error

        const { data, error: profileError } = await supabase
        .from('users')
        .select('username')
        .eq('id', user.id)
        .single()

        if (profileError) throw profileError

        res.status(200).json({ message: "Login successful", user: {...user, username: data.username}})
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
})

module.exports = router;