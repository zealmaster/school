import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { school } from './school.entity';

@Entity('location')
export class location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  location: string;

  @OneToMany(() => school, (school) => school.location)
  schools: school[];
}
