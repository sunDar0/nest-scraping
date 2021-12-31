import { Injectable, UseFilters } from '@nestjs/common';

import { ScrapingFailFilter } from '@scraper/filter/scrapling.fail.filter';
import { BaseScrapingService } from '@scraper/modules/scraping/base.scraping.service';
import { InvenService } from '@scraper/modules/scraping/inven/inven.service';


@Injectable()
export class ScrapingService {  
  constructor(private readonly invenService:InvenService)
  { }

  @UseFilters(ScrapingFailFilter)
  async scrapingData(serviceType: string):Promise<any>
  {
    const matchedService: BaseScrapingService = this[serviceType];
    return await matchedService.scraping();
  }
}
