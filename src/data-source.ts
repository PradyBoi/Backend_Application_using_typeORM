import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { User } from '../entities/entities';

// const AppDataSource = new DataSource({
export const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb+srv://PradyumnKhare:Nopassword@1@cluster0.51ma1qm.mongodb.net/ProjectDB?retryWrites=true&w=majority',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  entities: [User],
});

