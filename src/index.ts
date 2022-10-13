import { AppDataSource } from '../src/data-source';
import * as express from "express"

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });

const app = express();

app.use(express.json());
app.use('/', (req, res) => res.json({message: "hello"}));

const port = 3000;

app.listen(port, ()=> console.log(`App is listening on port: ${port}`))