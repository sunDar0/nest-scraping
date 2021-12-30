import { Controller, Get, Inject, Param, Query, UseFilters, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from '@scraper/interceptor/logger.interceptor';
import { ScrapingService } from '@scraper/modules/scraping/scraping.service';
import { ScrapingFailFilter } from '@scraper/filter/scrapling.fail.filter';
import { CategoryIdByTypePipe } from '@scraper/pipe/category-id-by-type.pipe';
import { ClientProxy } from '@nestjs/microservices';
import { FileService } from '../file/file.service';


@Controller('scraping')

export class ScrapingController {
  constructor(
    private readonly scrapingService : ScrapingService,
    private readonly fileService : FileService,
    @Inject('SCRAPING_SERVICE') private readonly queueClient : ClientProxy
    )  {}
  

  @UseInterceptors(LoggerInterceptor)
  @Get('categories/:categoryId')
  async scraping(@Param('categoryId',CategoryIdByTypePipe) serviceName:string):Promise<any>
  {
    const scrapingData = await this.scrapingService.scrapingData(serviceName);
    this.queueClient.emit('rank_created', scrapingData);
  }
}
