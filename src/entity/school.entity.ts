import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { location } from './location.entity';
import { user } from './user.entity';

@Entity('schools')
export class school {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ default: true })
  isActive: boolean;

  @ManyToOne(() => location, (location) => location.schools)
  location: location;

  @ManyToOne(() => user, (user) => user.school)
  user: user;
}
