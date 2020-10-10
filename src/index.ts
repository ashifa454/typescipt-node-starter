import * as express from 'express';
import { Request, Response } from 'express';

const app = express();
const {
    PORT = 8080
} = process.env;

app.get("/helloWorld", (req: Request, res: Response) => {
    res.status(200).json({
        "HELLO": "WORLD"
    });
});

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
});
