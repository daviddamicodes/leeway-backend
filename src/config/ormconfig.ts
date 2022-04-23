import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'leeway',
  password: 'password',
  database: 'leeway',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true,
};
