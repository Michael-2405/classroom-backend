import express from 'express';
import cors from 'cors';

import subjectRouter from './routes/subject';

const app = express();
const PORT = 8000;

if(!process.env.FRONTEND_URL) {
    console.warn("FRONTEND_URL not set - CORS will allow all origins");
}

app.use(cors({
    origin: process.env.FRONTEND_URL || false,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use('/api/subjects', subjectRouter);

app.get('/', (req, res) => {
    res.send("Hello, welcome to the Classroom API!");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})