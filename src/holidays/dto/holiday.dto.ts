/* eslint-disable @typescript-eslint/no-unsafe-call */

import {
  IsString,
  IsBoolean,
  IsOptional,
  IsArray,
  IsNumber,
  IsNotEmpty,
  IsInt,
} from 'class-validator';

export class HolidayApiResponseDto {
  @IsString()
  date: string;

  @IsString()
  localName: string;

  @IsString()
  name: string;

  @IsString()
  countryCode: string;

  @IsBoolean()
  global: boolean;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  counties?: string[];

  @IsOptional()
  @IsNumber()
  launchYear: number;

  @IsArray()
  @IsString({ each: true })
  types: string[];
}

export class HolidayDto {
  @IsString()
  date: string;

  @IsString()
  localName: string;

  @IsString()
  name: string;

  @IsString()
  countryCode: string;
}

export class AddHolidaysDto {
  @IsString()
  @IsNotEmpty()
  countryCode: string;

  @IsInt()
  year: number;

  @IsArray()
  @IsString({ each: true }) // each element of array must be a string
  holidays?: string[];
}
