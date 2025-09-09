import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BpartnersService } from './bpartners.service';
import { BpartnersController } from './bpartners.controller';
import { Bpartner } from './entities/bpartner.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bpartner])],
  controllers: [BpartnersController],
  providers: [BpartnersService],
  exports: [BpartnersService],
})
export class BpartnersModule {}

