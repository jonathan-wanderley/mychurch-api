import { ChurchProfile } from "@prisma/client";
import { CreateChurchDto } from "../dto/create-church.dto";

export interface ChurchRepositoryInterface {
    create(churchData: CreateChurchDto): Promise<ChurchProfile>;
    findAll(): Promise<ChurchProfile[]>;
}
