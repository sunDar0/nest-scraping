import {  Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { FileModule } from '../file/file.module';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { InvenModule } from './inven/inven.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports:[
    HttpModule, 
    FileModule, 
    InvenModule,
    ClientsModule.register([
      {
        
        name: 'SCRAPING_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [`${process.env.RMQ_URL}`],
          queue: 'main_queue',
          queueOptions: {
            durable: false
          },
        },
      }
    ])
  ],
  controllers: [ScrapingController],
  providers: [ScrapingService],
  exports:[ScrapingService],
})
export class ScrapingModule {}
