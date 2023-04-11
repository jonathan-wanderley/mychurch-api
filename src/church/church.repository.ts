import { Injectable } from "@nestjs/common";
import { CreateChurchDto } from "./dto/create-church.dto";
import { ChurchRepositoryInterface } from "./interface/church.repository.interface";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class ChurchRepository implements ChurchRepositoryInterface {
    
    constructor(private prisma: PrismaService) {}

    async create(data: CreateChurchDto): Promise<any> {    
        return await this.prisma.churchProfile.create({ data });
    }

}