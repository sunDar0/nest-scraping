import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapingModule } from '@scraping/scraping.module';
import { SearchModule } from './modules/search/search.module';

@Module({
  imports: [ScrapingModule, SearchModule],
  controllers: [AppController],
  providers: [
    AppService
  ],
})
export class AppModule {}
