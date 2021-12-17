import { Injectable, UseFilters } from '@nestjs/common';

import { ScrapingFailFilter } from 'src/filter/scrapling.fail.filter';
import { BaseScrapingService } from './base.scraping.service';
import { InvenService } from './inven/inven.service';


@Injectable()
export class ScrapingService {  
  constructor(private readonly invenService:InvenService)
  { }

  @UseFilters(ScrapingFailFilter)
  async scrapingData(serviceType: string):Promise<any>
  {
    const matchedService: BaseScrapingService = this[serviceType];
    await matchedService.scraping()
  }
}
