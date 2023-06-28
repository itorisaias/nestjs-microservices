import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignInDto {
  /**
   * @example jhow@fake.com
   */
  @IsEmail()
  email: string;

  /**
   * @example 123456
   */
  @IsNotEmpty()
  password: string;
}
