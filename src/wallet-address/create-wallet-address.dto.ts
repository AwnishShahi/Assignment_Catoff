import { IsString, IsInt } from 'class-validator';

export class CreateWalletAddressDto {
  @IsString()
  address: string;

  @IsInt()
  userId: number;
}
