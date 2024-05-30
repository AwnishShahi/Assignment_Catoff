import { IsString, IsEmail } from 'class-validator';

// Define a data transfer object (DTO) to represent the data structure for creating a user
export class CreateUserDto {
  // Decorate the 'name' property with the 'IsString' decorator to ensure it's a string
  @IsString()
  name: string;

  // Decorate the 'email' property with the 'IsEmail' decorator to ensure it's a valid email address
  @IsEmail()
  email: string;
}
