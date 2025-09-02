import {
  Controller,
  Post,
  Param,
  Body,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AddHolidaysDto } from 'src/holidays/dto/holiday.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':userId/calendar/holidays')
  @HttpCode(HttpStatus.CREATED)
  async addHolidaysToCalendar(
    @Param('userId') userId: number,
    @Body() data: AddHolidaysDto,
  ): Promise<{ message: string }> {
    const result = await this.usersService.addHolidaysToCalendar(userId, data);

    if (!result) {
      throw new HttpException(
        'User not found or error saving holidays',
        HttpStatus.BAD_REQUEST,
      );
    }

    return { message: 'Holidays added successfully' };
  }
}
