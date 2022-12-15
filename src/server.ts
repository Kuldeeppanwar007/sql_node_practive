import express from 'express';
import router from './router';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello world' });
})

app.use('/api', router)


export default app;