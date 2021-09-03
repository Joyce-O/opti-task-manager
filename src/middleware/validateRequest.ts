import {ValidationError, AnySchema} from 'yup';
import {Request, Response, NextFunction} from 'express';
import logger from '@src/utility/logger';

const validate =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        {
          abortEarly: false,
          stripUnknown: true,
        }
      );

      return next();
    } catch (err: unknown) {
      const error = err as ValidationError;
      logger.error(error);
      return res.status(400).json({error: true, message: error.inner});
    }
  };

export default validate;
