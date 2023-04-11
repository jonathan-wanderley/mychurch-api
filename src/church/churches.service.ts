import { Inject, Injectable } from '@nestjs/common';
import { CreateChurchDto } from './dto/create-church.dto';
import { UpdateChurchDto } from './dto/update-church.dto';
import { ChurchRepositoryInterface } from './interface/church.repository.interface';

@Injectable()
export class ChurchService {
  constructor(
    @Inject('ChurchRepositoryInterface')
    private readonly churchRepository: ChurchRepositoryInterface,
  ) {}

  create(createChurchDto: CreateChurchDto) {
    return this.churchRepository.create(createChurchDto);
  }

  findAll() {
    return `This action returns all churches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} church`;
  }

  update(id: number, updateChurchDto: UpdateChurchDto) {
    return `This action updates a #${id} church`;
  }

  remove(id: number) {
    return `This action removes a #${id} church`;
  }
}
