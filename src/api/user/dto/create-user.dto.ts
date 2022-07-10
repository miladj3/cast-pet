export class CreateUserDto {
  // @IsString();;`
  // @IsNotEmpty()
  readonly name: string;

  // @IsUrl()
  // @IsNotEmpty()
  readonly image: string;
}
