import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { WalletAddressModule } from './wallet-address/wallet-address.module';
import { User } from './users/user.entity/user.entity';
import { WalletAddress } from './wallet-address/walletaddress.entity/walletaddress.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'host-name',
      port: 'port-number',
      username: 'your-username', 
      password: 'your-password', 
      database: 'your-database',
      entities: [User, WalletAddress],
      synchronize: true,
    }),
    UsersModule,
    WalletAddressModule,
  ],
})
export class AppModule {}
