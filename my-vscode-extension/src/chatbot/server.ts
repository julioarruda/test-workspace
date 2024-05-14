import express from 'express';
import { processMessage } from './chatbot';

const app = express();
const port = 3000;

app.use(express.json());

app.post('/message', (req, res) => {
    const { message } = req.body;
    const response = processMessage(message);
    res.send({ response });
});

app.listen(port, () => {
    console.log(`Chatbot server listening at http://localhost:${port}`);
});
