import 'reflect-metadata';

import { DataSource } from 'typeorm';

import { Teature } from './entities/teature.entity';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'user',
  password: 'user_password',
  database: 'sample',
  entities: [Teature],
  migrations: ['src/migrations/*.ts'],
});
