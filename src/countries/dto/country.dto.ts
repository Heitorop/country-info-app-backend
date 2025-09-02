/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsArray, IsString, IsUrl, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PopulationDataDto } from './population.dto';

export class CountryDTO {
  @IsString()
  commonName: string;

  @IsString()
  officialName: string;

  @IsString()
  countryCode: string;

  @IsString()
  region: string;

  @IsArray()
  @IsString({ each: true })
  borders: string[];
}

export class CountryInfoDto {
  @IsArray()
  @IsString({ each: true })
  borderCountries: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PopulationDataDto)
  populationData: PopulationDataDto[];

  @IsUrl()
  flagUrl: string;

  constructor(
    borderCountries: string[],
    populationData: PopulationDataDto[],
    flagUrl: string,
  ) {
    this.borderCountries = borderCountries;
    this.populationData = populationData;
    this.flagUrl = flagUrl;
  }
}

export class CountriesDto {
  @IsString()
  countryCode: string;

  @IsString()
  name: string;
}
