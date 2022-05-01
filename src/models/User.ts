import { prop, getModelForClass } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';
import { Hobby } from './Hobby';

class User {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ type: String, default: () => nanoid() })
  sku: string;

  @prop({ type: Number, required: true })
  age: number;

  @prop({ type: () => [String], required: true })
  friend: string[];

  @prop({ type: () => [Hobby] })
  hobby: Hobby[];

  //   @prop({ ref: () => User })
  //   owner: Ref<User>;
}

const ModelUser = getModelForClass(User);
export default ModelUser;
