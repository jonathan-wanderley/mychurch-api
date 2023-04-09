import { Module } from '@nestjs/common';
import { ChurchService } from './churches.service';
import { ChurchController } from './church.controller';
import { PrismaService } from '../database/prisma.service';

@Module({
  controllers: [ChurchController],
  providers: [ChurchService, PrismaService]
})
export class ChurchModule {}
