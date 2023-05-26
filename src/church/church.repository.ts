import { Injectable } from "@nestjs/common";
import { CreateChurchDto } from "./dto/create-church.dto";
import { ChurchRepositoryInterface } from "./interface/church.repository.interface";
import { PrismaService } from "src/database/prisma.service";
import { ChurchProfile } from "@prisma/client";

@Injectable()
export class ChurchRepository implements ChurchRepositoryInterface {
    
    constructor(private prisma: PrismaService) {}

    async create(data: CreateChurchDto): Promise<ChurchProfile> {    
      return await this.prisma.churchProfile.create({ data });
    }

    async findAll(): Promise<ChurchProfile[]> {
      return await this.prisma.churchProfile.findMany();
    }

    async findOne(id: string): Promise<ChurchProfile> {
      return await this.prisma.churchProfile.findUnique({
        where: { id },
      })
    }
}
