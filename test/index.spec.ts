import supertest from 'supertest';
import mongoose from 'mongoose';
import { app } from '../src/app';
import { server } from '../src/server';
import { ModelUser } from '../src/models/User';
import { testUsers } from './helpers';

const api = supertest(app);

beforeEach(async () => {
  await ModelUser.deleteMany({});

  const user1 = new ModelUser(testUsers[0]);
  await user1.save();

  const user2 = new ModelUser(testUsers[1]);
  await user2.save();
});

describe('GET /tasks', () => {
  test('should respond with a 200 sratus code', async () => {
    const response = await api.get('/users').send();
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(testUsers.length);
  });

  test('should respond with a 200 sratus code', async () => {
    const response = await api.get('/users').send();
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(testUsers.length);
    expect(response.body[0].name).toBe(testUsers[0].name);
    expect(response.body[0].age).toBe(testUsers[0].age);
  });
});

afterAll(() => {
  server.close();
  mongoose.connection.close();
});
