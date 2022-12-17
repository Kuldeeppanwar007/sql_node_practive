import { createNewUser, signin } from './handlers/user';
import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';


const app = express();
app.use(cors())
app.use(/* A middleware that logs all the requests to the console. */
/* A middleware that logs all the requests to the console. */
morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world' });
})

app.use('/api', protect, router)

app.use('/user', createNewUser)

app.use('/signin', signin)


export default app;