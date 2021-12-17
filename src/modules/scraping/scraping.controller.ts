import { Controller, Get, Param, Query, UseFilters, UseInterceptors } from '@nestjs/common';
import { LoggerInterceptor } from 'src/interceptor/logger.interceptor';
import { ScrapingService } from 'src/modules/scraping/scraping.service';
import { ScrapingFailFilter } from 'src/filter/scrapling.fail.filter';
import { CategoryIdByTypePipe } from 'src/pipe/category-id-by-type.pipe';


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
