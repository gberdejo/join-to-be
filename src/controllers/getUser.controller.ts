import { Request, Response, Router } from 'express';
import User from '../models/User';

const router = Router();

export default router.get('/', async (req: Request, res: Response) => {
  const user = new User({
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
});
