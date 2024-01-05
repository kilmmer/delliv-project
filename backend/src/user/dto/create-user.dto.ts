import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
  id!: number;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  lastName: string;

  @IsNumber()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsStrongPassword({ minLength: 6 })
  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  role: string;

  isActive!: boolean;

  createdAt!: Date;

  updatedAt!: Date;
}
