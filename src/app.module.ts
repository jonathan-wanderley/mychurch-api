import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChurchesModule } from './churches/churches.module';

@Module({
  imports: [ChurchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
