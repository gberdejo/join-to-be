import { Request, Response, Router } from 'express';
import Joi from 'joi';

import { joiValidation } from '../utils/validation';
import { ModelUser } from '../models/User';

const router = Router();

export default router.get(
  '/users',
  joiValidation(
    Joi.object({
      // name: Joi.string().required(),
      // lastname: Joi.string().required(),
    }),
  ),
  async (req: Request, res: Response) => {
    const user = await ModelUser.find();
    res.status(200).json(user);
  },
);
