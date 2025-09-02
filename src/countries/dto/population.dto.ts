/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsNumber, IsString } from 'class-validator';

export class PopulationDataDto {
  @IsNumber()
  year: number;

  @IsNumber()
  value: number;
}

export class PopulationRowDto {
  @IsString()
  country: string;

  @IsString()
  code: string;

  @IsString()
  iso3: string;

  populationCounts: PopulationDataDto[];
}

export class PopulationApiResponseDto {
  error: boolean;
  msg: string;
  data: PopulationRowDto;
}
