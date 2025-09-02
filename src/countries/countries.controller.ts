import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  getAvailable() {
    return this.countriesService.getAvailable();
  }

  @Get(':countryCode')
  getInfo(@Param('countryCode') countryCode: string) {
    return this.countriesService.getInfo(countryCode);
  }
}
