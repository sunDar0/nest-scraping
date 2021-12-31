import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingModule } from '@scraper/modules/scraping/scraping.module';
import { SearchModule } from '@scraper/modules/search/search.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true, 
      envFilePath:process.env.APP_ENV == 'dev' ? '.env' : `.env.${process.env.APP_ENV}`,
    })
    ,ScrapingModule
    ,SearchModule,
  ],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
