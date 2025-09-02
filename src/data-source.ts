import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';
import { CalendarEvents } from './calendar-events/calendar-event.entity';
import * as dotenv from 'dotenv';

dotenv.config({ path: __dirname + '/../.env' });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Users, CalendarEvents],
  synchronize: false,
  migrations: [__dirname + '/migration/*{.ts,.js}'],
});
