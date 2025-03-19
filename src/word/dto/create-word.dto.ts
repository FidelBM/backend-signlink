import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsUUID,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateWordDto {
  @IsString()
  @IsNotEmpty()
  word: string;

  @IsString()
  @IsNotEmpty()
  meaning: string;


  @IsString()
  @IsNotEmpty()
  grammaticalClass: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsNotEmpty()
  ipa: string;

  @IsArray()
  @IsOptional()
  @IsUUID('4', { each: true }) // IDs de media
  mediaIds?: string[];

  @IsString()
  @IsNotEmpty()
  explanation_language: string;


  @IsString()
  @IsNotEmpty()
  sign_language: string;


  @IsArray()
  @IsNotEmpty()
  @IsString({ each: true }) 
  syllables: string[];
}
