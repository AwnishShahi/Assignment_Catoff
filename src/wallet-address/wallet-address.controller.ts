import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { WalletAddressService } from './wallet-address.service';
import { WalletAddress } from './walletaddress.entity/walletaddress.entity';
import { CreateWalletAddressDto } from './create-wallet-address.dto';

@Controller('wallet-address')
export class WalletAddressController {
  constructor(private readonly walletAddressService: WalletAddressService) {}

  @Get()
  findAll(): Promise<WalletAddress[]> {
    return this.walletAddressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<WalletAddress> {
    return this.walletAddressService.findOne(+id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(
    @Body() createWalletAddressDto: CreateWalletAddressDto,
  ): Promise<WalletAddress> {
    return this.walletAddressService.create(
      createWalletAddressDto as WalletAddress,
    );
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id') id: string,
    @Body() createWalletAddressDto: CreateWalletAddressDto,
  ): Promise<WalletAddress> {
    return this.walletAddressService.update(
      +id,
      createWalletAddressDto as WalletAddress,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.walletAddressService.remove(+id);
  }
}
