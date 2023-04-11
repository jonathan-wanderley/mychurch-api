import { Module } from '@nestjs/common';
import { ChurchService } from './churches.service';
import { ChurchController } from './church.controller';
import { PrismaService } from '../database/prisma.service';
import { ChurchRepository } from './church.repository';
import { ChurchRepositoryInterface } from './interface/church.repository.interface';

@Module({
  controllers: [ChurchController],
  providers: [
    PrismaService,
    {
      provide: 'ChurchRepositoryInterface',
      useClass: ChurchRepository
    },
    ChurchService,
  ]
})
export class ChurchModule {}
