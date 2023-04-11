import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChurchModule } from './church/church.module';

@Module({
  imports: [ChurchModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
