import { Controller, Get, Param, Query, UseFilters, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from '@scraper/interceptor/logger.interceptor';
import { ScrapingService } from '@scraper/modules/scraping/scraping.service';
import { ScrapingFailFilter } from '@scraper/filter/scrapling.fail.filter';
import { CategoryIdByTypePipe } from '@scraper/pipe/category-id-by-type.pipe';


@Controller('scraping')

export class ScrapingController {
  constructor(private readonly scrapingService : ScrapingService)  {}
  

  @UseInterceptors(LoggerInterceptor)
  @Get('categories/:categoryId')
  async scraping(@Param('categoryId',CategoryIdByTypePipe) serviceName:string):Promise<any>
  {
    return await this.scrapingService.scrapingData(serviceName);
  }
}
