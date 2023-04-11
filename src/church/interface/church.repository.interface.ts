import { CreateChurchDto } from "../dto/create-church.dto";

export interface ChurchRepositoryInterface {
    create(churchData: CreateChurchDto): Promise<any>;
}