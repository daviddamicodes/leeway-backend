import { PrimaryGeneratedColumn } from 'typeorm';

export class LeewayBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
