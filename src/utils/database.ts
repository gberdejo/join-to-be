import mongoose from 'mongoose';
import { get } from '../config/index';

export const connectionDb = async () => {
  await mongoose.connect(get('mongo_uri'));
};
