import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';
import { CalendarEvents } from '../calendar-events/calendar-event.entity';
import { HolidaysModule } from '../holidays/holidays.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users, CalendarEvents]), HolidaysModule],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
