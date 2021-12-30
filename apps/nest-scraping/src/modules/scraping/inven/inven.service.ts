import { Injectable } from '@nestjs/common';
import { HttpService } from "@nestjs/axios";

import { InvenScraping } from '@parser/inven.scraping';
import { BaseScrapingService } from '@scraper/modules/scraping/base.scraping.service';
import { ScrapingFailException } from '@scraper/exception/scraping.fail.exception';
import { lastValueFrom } from 'rxjs';



@Injectable()
export class InvenService implements BaseScrapingService
{
  constructor(
    private readonly httpService: HttpService,
    private readonly invenScraping: InvenScraping,
    )
  { }
  

  async scraping()
  {
    if(this.invenScraping.checkLastUpdate()) throw new ScrapingFailException('already update data')
    
    const response = await lastValueFrom(this.httpService.get('https://inven.co.kr'));
    
    return await this.invenScraping.parsedData(response.data);
  }

  
}
