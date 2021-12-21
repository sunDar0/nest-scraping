import { Module } from '@nestjs/common';
import { ScrapingSubsController } from './scraping-subs.controller';
import { ScrapingSubsService } from './scraping-subs.service';

@Module({
  imports: [],
  controllers: [ScrapingSubsController],
  providers: [ScrapingSubsService],
})
export class ScrapingSubsModule {}
