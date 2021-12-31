import {  Module } from '@nestjs/common';
import { HttpModule } from "@nestjs/axios";
import { FileModule } from '../file/file.module';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { InvenModule } from './inven/inven.module';
import { ClientsModule, ClientsModuleAsyncOptions, ClientsProviderAsyncOptions, RmqOptions, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { async } from 'rxjs';

//환경변수가 세팅 되기전에 초기 세팅이 진행되어 RMG_URL 값을 찾을 수 없어 해당 부분 수정
@Module({
  imports:[
    ClientsModule.registerAsync([{
      imports:[ConfigModule]
      ,name:"SCRAPING_SERVICE"
      ,inject: [ConfigService]
      ,useFactory: async (config: ConfigService) =>{
        return {
          transport: Transport.RMQ  
          ,options:{
            urls: [config.get('RMQ_URL')]
            ,queue: 'main_queue'
            ,queueOptions: {
              durable:false
            }
          }
        } as RmqOptions
      }
    } as ClientsProviderAsyncOptions ])
    ,HttpModule
    ,FileModule 
    ,InvenModule
  ],
  controllers: [ScrapingController],
  providers: [ScrapingService],
  exports:[ScrapingService],
})
export class ScrapingModule {}
