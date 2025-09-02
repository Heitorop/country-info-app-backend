import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CountriesDto, CountryDTO, CountryInfoDto } from './dto/country.dto';
import {
  PopulationApiResponseDto,
  PopulationDataDto,
} from './dto/population.dto';
import { FlagApiResponseDto } from './dto/flag.dto';

@Injectable()
export class CountriesService {
  constructor(private configService: ConfigService) {}

  async getAvailable(): Promise<CountriesDto[]> {
    try {
      const response = await axios.get(
        `${this.configService.get<string>('NAGER_API')}/AvailableCountries`,
        {},
      );

      return response.data as CountriesDto[];
    } catch {
      throw new Error('Failed to fetch available countries');
    }
  }

  async getInfo(countryCode: string): Promise<CountryInfoDto> {
    try {
      const countryInfoRes = await axios.get<CountryDTO>(
        `${this.configService.get<string>('NAGER_API')}/CountryInfo/${countryCode}`,
      );
      const countryInfo: CountryDTO = countryInfoRes.data;

      const populationRes = await axios.post<PopulationApiResponseDto>(
        `${this.configService.get<string>('COUNTRIES_API')}population`,
        { country: countryInfo.commonName },
      );

      const populationCounts = populationRes.data.data?.populationCounts || [];
      console.log(populationRes.data.data.populationCounts);
      const populationData: PopulationDataDto[] = populationCounts.map(
        (item: PopulationDataDto) => ({
          year: Number(item.year),
          value: Number(item.value),
        }),
      );

      const flagRes = await axios.post<FlagApiResponseDto>(
        `${this.configService.get('COUNTRIES_API')}flag/images`,
        { iso2: countryInfo.countryCode },
      );
      const flagUrl: string = flagRes.data.data?.flag || '';

      return new CountryInfoDto(
        countryInfo.borders || [],
        populationData,
        flagUrl,
      );
    } catch {
      throw new Error('Failed to fetch country info');
    }
  }
}
