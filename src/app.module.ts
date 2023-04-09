import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChurchModule } from './churches/church.module';

@Module({
  imports: [ChurchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
