import mongoose from 'mongoose';
import 'dotenv/config';
import logger from '@src/logger';

const connect = () => {
  const dbUri = process.env.MONGODB_URI as string;
  return mongoose
    .connect(dbUri)
    .then(result => {
      logger.info('Database connected', result);
    })
    .catch(error => {
      if (error.name === 'MongooseServerSelectionError') {
        logger.error({
          error: error,
          message: 'Make sure mongodb server is started',
        });
        return;
      }
      if (error.name === 'MongooseError') {
        logger.error({
          error: error,
          message: 'Make sure mongodb uri string is provided',
        });
        return;
      }
      logger.error({
        error: error,
        message: 'Error',
      });
    });
};

export default connect;
