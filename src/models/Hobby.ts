import { prop } from '@typegoose/typegoose';
import { nanoid } from 'nanoid';

export class Hobby {
  @prop({ type: String })
  name: string;

  @prop({ type: String, default: () => nanoid() })
  sku: string;
}
