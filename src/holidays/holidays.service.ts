import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { HolidayApiResponseDto, HolidayDto } from './dto/holiday.dto';

@Injectable()
export class HolidaysService {
  constructor(private configService: ConfigService) {}

  async getCountryHolidays(
    countryCode: string,
    year: number,
  ): Promise<HolidayDto[]> {
    const url = `${this.configService.get<string>('NAGER_API')}/PublicHolidays/${year}/${countryCode}`;
    const response = await axios.get<HolidayApiResponseDto[]>(url);

    return response.data.map((holiday) => {
      const { date, localName, name, countryCode } = holiday;
      return { date, localName, name, countryCode };
    });
  }
}
