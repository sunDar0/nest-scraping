import { Module } from '@nestjs/common';
import {HttpModule} from  "@nestjs/axios"
import { InvenScraping } from '@parser/inven.scraping';
import { FileModule } from '@scraper/modules/file/file.module';
import { InvenService } from './inven.service';

@Module({
  imports:[HttpModule, FileModule],
  providers: [InvenService, InvenScraping],
  exports:[InvenService]
})
export class InvenModule {}
