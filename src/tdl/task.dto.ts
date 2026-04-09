import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { IsDate } from 'sequelize-typescript';

export class CreateTaskDto {
  @IsString()
  @ApiProperty({ description: 'what are you doing??', example: 'homework' })
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'what are you doing??', example: 'math' })
  content: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: '1' })
  priority: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  start_date: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  deadline: string;
}

export class PatchTaskDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'homework' })
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'math' })
  content: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ example: '1' })
  priority: number;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  start_date: string;

  @IsOptional()
  @IsDateString()
  @ApiProperty()
  deadline: string;
}
