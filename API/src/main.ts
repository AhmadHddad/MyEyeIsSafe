import express from 'express';
import dbConnect from './app/dbConnect';
import { AllowCors } from './middlewares/allowCores';
import StudentModel from './models/student';

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());
app.use(AllowCors);

dbConnect().then(() => {
  app.listen(port, () => console.log(`Server running on ${port}!`));
});

app.get('/hello/:value', (req, res) => {
  console.log(`${req.method}: ${req.url}`);
  const str = req.params.value as string;
  res.statusCode = 400;
  res.send({ message: `Hello ${str}!` });
});


app.get('/student',async (_,res)=>{

const students = await StudentModel.find();

res.send(students);
});


app.post('/student', async (req, res, next) => {
  const { name } = req.body;

  
  const student = await new StudentModel({ name }).save();
  
  res.json(student.toJSON());
});

app.use((req, res, next) => {
  console.log('NOOOO');
  res.statusCode = 404;
  res.json({ message: 'Not Found!' });
});
