import express, { Application, NextFunction } from 'express';
import dbConnect from './app/dbConnect';
import { AllowCors } from './middlewares/allowCores';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json())
app.use(AllowCors);

await dbConnect();

app.listen(port, () => console.log(`Server running on ${port}!`));

app.get('/hello/:value', (req, res) => {
  console.log(`${req.method}: ${req.url}`);
  const str = req.params.value as string;
  res.statusCode = 400;
  res.send({ message: `Hello ${str}!` });
});
