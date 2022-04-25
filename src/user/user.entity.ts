import { LeewayBaseEntity } from '@app/commons/base.entity';
import { hash } from 'bcrypt';
import { BeforeInsert, Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends LeewayBaseEntity {
  @Column()
  username: string;

  @Column()
  email: string;

  @Column({ default: '' })
  bio: string;

  @Column({ default: '' })
  image: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
