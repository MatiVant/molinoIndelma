import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bpartner } from './entities/bpartner.entity';

@Injectable()
export class BpartnersService {
  constructor(
    @InjectRepository(Bpartner)
    private readonly bpartnerRepository: Repository<Bpartner>,
  ) {}

  async findAll() {
    return this.bpartnerRepository.find({
      select: ['id', 'code', 'name', 'fiscalNumber', 'address', 'phone'],
      order: { name: 'ASC' },
      take: 50,
    });
  }

  async findOne(id: number) {
    return this.bpartnerRepository.findOne({
      where: { id },
      select: ['id', 'code', 'name', 'fiscalNumber', 'address', 'phone'],
    });
  }
}
