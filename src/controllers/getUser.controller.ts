import { Request, Response, Router } from 'express';
import Joi from 'joi';

import { joiValidation } from '../utils/validation';
import { ModelUser } from '../models/User';

const router = Router();

export default router.get(
  '/',
  joiValidation(
    Joi.object({
      // name: Joi.string().required(),
      // lastname: Joi.string().required(),
    }),
  ),
  async (req: Request, res: Response) => {
    const user = new ModelUser({
      name: 'John Doe',
      age: 20,
      friend: ['John', 'Jane'],
      hobby: [
        {
          name: 'Hobby 1',
        },
        {
          name: 'Hobby 2',
        },
      ],
    });
    await user.save();
    res.status(200).json(user);
  },
);
