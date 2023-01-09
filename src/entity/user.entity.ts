import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { school } from './school.entity';

@Entity('user')
export class user {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => school, (school) => school.user)
  school: school[];
}
