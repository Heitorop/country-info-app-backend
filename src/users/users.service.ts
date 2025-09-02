import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddHolidaysDto } from 'src/holidays/dto/holiday.dto';
import { HolidaysService } from 'src/holidays/holidays.service';
import { CalendarEvents } from '../calendar-events/calendar-event.entity';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly holidaysService: HolidaysService,
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(CalendarEvents)
    private readonly calendarEventsRepository: Repository<CalendarEvents>,
  ) {}

  async addHolidaysToCalendar(
    userId: number,
    data: AddHolidaysDto,
  ): Promise<boolean> {
    const user = await this.usersRepository.findOne({ where: { id: userId } });
    if (!user) return false;

    const allHolidays = await this.holidaysService.getCountryHolidays(
      data.countryCode,
      data.year,
    );

    const selectedHolidays =
      Array.isArray(data.holidays) && data.holidays.length
        ? allHolidays.filter((holiday) => data.holidays!.includes(holiday.name))
        : allHolidays;

    const calendarEvent = this.calendarEventsRepository.create({
      countryCode: data.countryCode,
      year: data.year,
      holidays: selectedHolidays.map((h) => h.name),
      user,
    });
    const result = await this.calendarEventsRepository.save(calendarEvent);
    return !!result;
  }
}
