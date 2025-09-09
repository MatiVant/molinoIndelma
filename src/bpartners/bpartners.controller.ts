import { Controller, Get, Param } from '@nestjs/common';
import { BpartnersService } from './bpartners.service';

@Controller('bpartners')
export class BpartnersController {
  constructor(private readonly bpartnersService: BpartnersService) {}

  @Get()
  findAll() {
    console.log('findAll');
    return this.bpartnersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bpartnersService.findOne(+id);
  }
}
