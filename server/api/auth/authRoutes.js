import express from 'express'
import registerRoute from './register/registerRoute'
import loginRoute from './login/loginRoute'

const router = express.Router();

router.use('/register', registerRoute);
router.use('/login', loginRoute);

module.exports = router;