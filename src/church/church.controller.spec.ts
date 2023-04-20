import { Test, TestingModule } from '@nestjs/testing';
import { ChurchController } from './church.controller';
import { ChurchService } from './church.service';
import { CreateChurchDto } from './dto/create-church.dto';
import { ChurchProfile } from '@prisma/client';

const churchProfileExample: ChurchProfile = {
  id: '46772387-b6b3-4de3-9045-5bf7d91214f7',
  name: 'john',
  photo: 'https://www.google.com/logo.png',
  cnpj: '25.117.661/0001-22',
  created_at: new Date(),
  updated_at: new Date()
}

describe('ChurchController', () => {
  let churchController: ChurchController;
  let churchService: ChurchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChurchController],
      providers: [
        {
          provide: ChurchService,
          useValue: {
            create: jest.fn().mockResolvedValue(churchProfileExample),
            findAll: jest.fn(),
            findOne: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
          }
        },
      ],
    }).compile();

    churchController = module.get<ChurchController>(ChurchController);
    churchService = module.get<ChurchService>(ChurchService);
  });

  it('should be defined', () => {
    expect(churchController).toBeDefined();
    expect(churchService).toBeDefined();
  });

  describe('create', () => {
    const body: CreateChurchDto = {
        name: 'john',
        photo: 'https://www.google.com/logo.png',
        cnpj: '25.117.661/0001-22'
      }
    
    it('should create a new church sucessfully', async () => {
      
      
      const result = await churchController.create(body);
      
      expect(result).toEqual(churchProfileExample);
      expect(churchService.create).toHaveBeenCalledTimes(1);
      expect(churchService.create).toHaveBeenCalledWith(body);
    })

    it('should throw an expection', () => {
      jest.spyOn(churchService, 'create').mockRejectedValueOnce(new Error())

      expect(churchController.create(body)).rejects.toThrowError();
    })
  })
});