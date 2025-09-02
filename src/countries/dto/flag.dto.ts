/* eslint-disable @typescript-eslint/no-unsafe-call */

import { IsBoolean, IsString } from 'class-validator';

export class FlagApiResponseDto {
  @IsBoolean()
  error: boolean;
  @IsString()
  msg: string;

  data: FlagDataDto;
}

export class FlagDataDto {
  @IsString()
  name: string;
  @IsString()
  flag: string;
  @IsString()
  iso2: string;
  @IsString()
  iso3: string;
}
