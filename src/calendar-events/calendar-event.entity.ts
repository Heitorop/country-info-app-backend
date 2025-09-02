import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity('calendar_events')
export class CalendarEvents {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  countryCode: string;

  @Column({ type: 'int' })
  year: number;

  @Column({ type: 'text', array: true })
  holidays: string[];

  @ManyToOne(() => Users, (user) => user.calendar)
  user: Users;
}
