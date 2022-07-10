import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @Trim()
  @IsOptional()
  public readonly name?: string;

  @IsEmail()
  @Trim()
  @IsNotEmpty()
  public readonly email: string;

  @IsString()
  @Trim()
  @IsNotEmpty()
  @MinLength(8)
  public readonly password: string;
}

export class LoginDto {
  @IsEmail()
  @Trim()
  @IsNotEmpty()
  public readonly email: string;

  @IsString()
  @Trim()
  @IsNotEmpty()
  @MinLength(8)
  public readonly password: string;
}
