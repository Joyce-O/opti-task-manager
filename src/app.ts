import 'dotenv/config';
import express, {Application, Request, Response} from 'express';
import logger from '@src/logger';
import connect from '@src/db/connect';

const port = Number(process.env.HTTP_PORT) || 5000;
const host = (process.env.HTTP_HOST as string) || '127.0.0.1';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('*', (req: Request, res: Response) => {
  return res.send({Message: 'Hello, opti-task-manager'});
});

app.listen(port, host, () => {
  logger.info(`Server listening on http://${host}:${port}`);
  connect();
});
