import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpDto {
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

  /**
   * @example 'Jhow Jhone'
   */
  @IsNotEmpty()
  name: string;
}
