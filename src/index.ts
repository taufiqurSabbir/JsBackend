import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.status(200).send('Hello World!');
});

app.get('/getNationality', async (req: Request, res: Response) => {
   
        const BASE_URL = 'https://api.nationalize.io';
        const response = await axios.get(`${BASE_URL}/?name=${req.query['name']}`);
        
        console.log(response.data);
        res.status(200).send(response.data);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

