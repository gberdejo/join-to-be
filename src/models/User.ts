import { prop, getModelForClass } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';

export class Hobby {
  @prop({ type: String })
  name: string;

  @prop({ type: String, default: () => nanoid() })
  sku?: string;
}

export class User {
  @prop({ type: String, required: true, trim: true })
  name: string;

  @prop({ type: String, default: () => nanoid() })
  sku?: string;

  @prop({ type: Number, required: true })
  age: number;

  @prop({ type: () => [String], required: true })
  friend: string[];

  @prop({ type: () => [Hobby] })
  hobby: Hobby[];

  //   @prop({ ref: () => User })
  //   owner: Ref<User>;
}

export const ModelUser = getModelForClass(User, {
  schemaOptions: {
    timestamps: true,
    collection: 'user',
  },
});
