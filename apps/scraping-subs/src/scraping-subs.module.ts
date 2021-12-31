import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { InvenModule } from './modules/inven/inven.module';
import { ScrapingSubsController } from './scraping-subs.controller';
import { ScrapingSubsService } from './scraping-subs.service';

@Module({
  imports: [
    
    ConfigModule.forRoot({
      isGlobal:true, 
      envFilePath:process.env.APP_ENV == 'dev' ? '.env' : `.env.${process.env.APP_ENV}`,
    })
    ,MongooseModule.forRoot(`${process.env.MONGO_URL}/nest_main`, {
      autoCreate:true
    })
    ,InvenModule
    
  ],
  controllers: [ScrapingSubsController],
  providers: [ScrapingSubsService],
})
export class ScrapingSubsModule {}
