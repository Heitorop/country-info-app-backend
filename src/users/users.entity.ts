import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CalendarEvents } from '../calendar-events/calendar-event.entity';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;
  @OneToMany(() => CalendarEvents, (event) => event.user, { cascade: true })
  calendar: CalendarEvents[];
}
