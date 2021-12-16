import { HttpModule, Module } from '@nestjs/common';
import { FileModule } from '../file/file.module';
import { ScrapingController } from './scraping.controller';
import { ScrapingService } from './scraping.service';
import { InvenModule } from './inven/inven/inven.module';

@Module({
  imports:[HttpModule, FileModule, InvenModule],
  controllers: [ScrapingController],
  providers: [ScrapingService]
})
export class ScrapingModule {}
