import { HttpService, Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { intefaceBaseScrapingService, InvenService } from './inven/inven.service';



@Injectable()
export class ScrapingService {

  

  constructor(
    private readonly invenService : InvenService,
    // private readonly naverService : NaverService
    )
  {
    
  }

  async scrapingData(serviceType: string):Promise<any>
  {
    const matchedService: intefaceBaseScrapingService = this[serviceType];
    
    
    matchedService.scraping()
  }
}
