import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WalletAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  address: string;

  @Column()
  userId: number;
}
