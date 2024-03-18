import { IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly username?: string;
}
